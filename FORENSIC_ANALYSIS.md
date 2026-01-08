# Netlify Forms Forensic Analysis
**Date:** January 2025  
**Issue:** Form submissions not reaching Netlify (0 submissions, not even spam)  
**Status:** Form detected in Netlify dashboard, but no submissions received

---

## 🔍 EXECUTIVE SUMMARY

The form **IS detected** by Netlify (confirmed in dashboard), but **NO submissions are being received** (not even spam). This suggests the issue is in the **submission process**, not form detection.

---

## ✅ WHAT'S WORKING

1. **Form Detection:** ✅ Netlify dashboard shows form "contact" was created on Jan 7
2. **Build Process:** ✅ Next.js builds successfully
3. **Form Structure:** ✅ All required attributes present:
   - `data-netlify="true"` ✅
   - `netlify-honeypot="bot-field"` ✅
   - `form-name` hidden input ✅
   - All field names match ✅

---

## 🚨 CRITICAL FINDINGS

### Finding #1: Multiple Form Implementations (Potential Conflict)

**Three separate form implementations exist:**

1. **`public/__forms.html`** - Static HTML file (accessible at `/__forms.html`)
   - ✅ Properly formatted
   - ✅ All fields present
   - ✅ Matches Netlify requirements

2. **Hidden form in `app/contact/page.tsx`** (lines 13-25)
   - Uses `dangerouslySetInnerHTML`
   - ⚠️ **May not be in static HTML at build time** (Next.js App Router)
   - ⚠️ **Potential issue:** Next.js might not include this in pre-rendered HTML

3. **React form in `components/ContactForm.tsx`**
   - Client-side rendered
   - Uses controlled inputs with React state
   - ⚠️ **CRITICAL ISSUE IDENTIFIED BELOW**

---

### Finding #2: FormData Capture Issue (MOST LIKELY ROOT CAUSE)

**Location:** `components/ContactForm.tsx` lines 152-167

**The Problem:**
```typescript
const myForm = e.target as HTMLFormElement;
const formData = new FormData(myForm);
```

**Issue:** The form uses **controlled React inputs** (`value={values.name}`, etc.), but when `FormData` is created from the form element, it reads the **actual DOM values**, not React state.

**Why this matters:**
- React controlled inputs sync state to DOM, but there can be timing issues
- If the DOM values don't match React state at submission time, FormData captures empty/wrong values
- Netlify might reject empty submissions or they might fail validation

**Evidence:**
- Form uses `value={values.name}` (controlled)
- FormData reads from DOM, not React state
- No submissions received (suggests data isn't reaching Netlify)

---

### Finding #3: Hidden Form May Not Be Static

**Location:** `app/contact/page.tsx` lines 13-25

**Issue:** Using `dangerouslySetInnerHTML` in a Next.js App Router page component:
- Next.js App Router pages are server-rendered by default
- The hidden form might be in the HTML, but Netlify needs it in **static HTML at build time**
- The `public/__forms.html` file should handle this, but having multiple forms might cause confusion

---

### Finding #4: AJAX Submission Path

**Location:** `components/ContactForm.tsx` line 163

```typescript
const res = await fetch("/", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: params.toString(),
});
```

**Analysis:**
- ✅ Correct endpoint (`/`)
- ✅ Correct method (`POST`)
- ✅ Correct Content-Type header
- ✅ URL-encoded body
- ⚠️ **But:** If FormData is empty/wrong, the body will be empty/wrong

---

## 📋 NETLIFY REQUIREMENTS CHECKLIST

According to Netlify docs for Next.js/SSR:

- [x] Form has `data-netlify="true"` or `netlify` attribute
- [x] Form has `name` attribute
- [x] Static HTML form exists (via `public/__forms.html`)
- [x] All field names match between static and React forms
- [x] Hidden `form-name` input present
- [x] Honeypot field configured
- [x] AJAX submission uses correct endpoint (`/`)
- [x] AJAX submission uses correct Content-Type
- [x] Body is URL-encoded
- [ ] **FormData contains actual values** ⚠️ **LIKELY FAILING HERE**

---

## 🎯 ROOT CAUSE ANALYSIS

### Most Likely Issue: FormData Not Capturing Values

**Why:**
1. Form uses controlled React inputs
2. FormData reads from DOM, not React state
3. If DOM values are empty or stale, FormData will be empty
4. Empty FormData → Empty request body → Netlify rejects or ignores

**Why no spam either:**
- Even spam bots would need to fill the form
- If the form isn't submitting properly, nothing gets through

---

## 🔧 RECOMMENDED SOLUTION (Per Netlify Docs)

According to the Netlify documentation example you provided:

```javascript
const handleSubmit = event => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => navigate("/thank-you/"))
    .catch(error => alert(error));
};
```

**Key differences from current implementation:**
1. ✅ We're using `FormData(myForm)` - **CORRECT**
2. ✅ We're using `URLSearchParams(formData)` - **CORRECT** (but TypeScript-safe version)
3. ⚠️ **BUT:** The form must have actual DOM values, not just React state

**The Fix:**
- Ensure form inputs have their values in the DOM at submission time
- OR: Manually populate FormData from React state values
- OR: Use uncontrolled inputs (let DOM manage values)

---

## 🧪 TESTING RECOMMENDATIONS

Before making changes, test:

1. **Check browser console:**
   - Are there any JavaScript errors?
   - What does the network tab show for the POST request?
   - What's in the request body?

2. **Check FormData contents:**
   - Add `console.log(Array.from(formData.entries()))` before fetch
   - Verify all fields have values

3. **Test the static form:**
   - Visit `https://coulsycode.co.uk/__forms.html`
   - Try submitting directly (should work if form detection is correct)

4. **Check Netlify build logs:**
   - Verify form was detected during build
   - Check for any warnings about forms

---

## 📝 NEXT STEPS (NO CODE CHANGES YET)

1. **Add debugging** to see what FormData contains
2. **Test in browser** to see actual request being sent
3. **Verify** the static HTML form is accessible
4. **Check** if there are any CORS or network errors
5. **Confirm** the exact solution before implementing

---

## 🔍 ADDITIONAL INVESTIGATION NEEDED

1. **Browser DevTools:**
   - Network tab: What's the actual request body?
   - Console: Any errors?
   - FormData: What values does it contain?

2. **Netlify Dashboard:**
   - Form settings: Any restrictions?
   - Spam filter settings: Too aggressive?
   - Form detection: When was it last detected?

3. **Build Output:**
   - Is the hidden form in the static HTML?
   - Is `__forms.html` being served correctly?

---

## 💡 HYPOTHESIS

**Most Likely:** FormData is not capturing the React state values because:
- Controlled inputs might not have synced to DOM
- OR: FormData is created before React updates DOM
- OR: There's a timing issue with controlled inputs

**Solution:** Either:
1. Use uncontrolled inputs (let DOM manage state)
2. Manually populate FormData from React state
3. Ensure DOM values match React state before creating FormData

---

---

## ✅ SOLUTION IMPLEMENTED

**Date:** January 2025  
**Status:** Fix applied

### Root Cause Confirmed
- Static form at `__forms.html` works ✅
- React form was not capturing values correctly ❌
- Issue: Controlled React inputs may not sync to DOM before FormData creation

### Solution Applied
Manually populate FormData from React state values to ensure all data is included:

```typescript
const formData = new FormData(myForm);
// Explicitly set all values from React state
formData.set("form-name", "contact");
formData.set("name", values.name.trim());
formData.set("email", values.email.trim());
// ... etc
```

This ensures:
- ✅ Still uses FormData from form element (Netlify pattern)
- ✅ All values guaranteed to be included
- ✅ Matches working static form behavior

**Next:** Test React form submission to verify fix works.
