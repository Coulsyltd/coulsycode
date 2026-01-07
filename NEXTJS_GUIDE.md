# Next.js Quick Start Guide 🚀

**For:** Robert Coulson (First-time Next.js user)  
**Date:** January 2026

---

## 🎯 **What is Next.js?**

Next.js is a React framework that makes it easy to build:
- **Static websites** (like Astro - fast, SEO-friendly)
- **Dynamic web applications** (APIs, databases, real-time features)
- **Full-stack applications** (frontend + backend in one project)

**Key Difference from Astro:**
- Astro = Great for static sites, content-heavy
- Next.js = Can do static sites AND dynamic apps (more powerful)

---

## 📁 **Project Structure**

```
coulsycode/
├── app/                    # Main application folder (App Router)
│   ├── layout.tsx         # Root layout (like Layout.astro)
│   ├── page.tsx           # Homepage (like index.astro)
│   ├── about/             # About page
│   │   └── page.tsx
│   ├── services/          # Services pages
│   │   └── page.tsx
│   └── api/               # API routes (backend!)
│       └── contact/
│           └── route.ts   # API endpoint
├── components/            # Reusable components (like Astro)
├── public/               # Static files (images, etc.)
├── package.json          # Dependencies
└── next.config.js        # Next.js configuration
```

---

## 🔑 **Key Concepts**

### **1. Pages = Files**

In Astro: `pages/about.astro` → `/about`  
In Next.js: `app/about/page.tsx` → `/about`

**Example:**
```typescript
// app/about/page.tsx
export default function AboutPage() {
  return <h1>About Us</h1>
}
```

### **2. Components = React Components**

In Astro: `.astro` files  
In Next.js: `.tsx` files (React)

**Example:**
```typescript
// components/Button.tsx
export function Button({ text }: { text: string }) {
  return <button>{text}</button>
}
```

### **3. Layouts = Wrapper Components**

In Astro: `Layout.astro`  
In Next.js: `app/layout.tsx`

**Example:**
```typescript
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>Navigation</nav>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}
```

### **4. API Routes = Backend**

**NEW in Next.js!** You can create API endpoints:

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  // Process form submission
  return Response.json({ success: true })
}
```

---

## 🚀 **Common Commands**

```bash
# Start development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run lint
```

---

## 📝 **Basic Page Example**

```typescript
// app/services/page.tsx
export default function ServicesPage() {
  return (
    <div>
      <h1>Our Services</h1>
      <p>Web development services...</p>
    </div>
  )
}
```

---

## 🎨 **Styling (Tailwind CSS)**

Same as Astro! Use Tailwind classes:

```typescript
<div className="bg-blue-500 text-white p-4">
  Hello World
</div>
```

**Note:** In Next.js it's `className` (not `class` like HTML)

---

## 🔄 **Differences from Astro**

| Astro | Next.js |
|-------|---------|
| `.astro` files | `.tsx` files |
| `class=` | `className=` |
| Frontmatter `---` | TypeScript/React |
| Static by default | Can be static OR dynamic |
| No backend | Built-in API routes |

---

## 💡 **Why Next.js for This Site?**

1. **Showcase Full-Stack** - Can demonstrate APIs, databases
2. **Live Demos** - Interactive portfolio examples
3. **Enterprise Cred** - Industry-standard framework
4. **Future-Proof** - Can add features as needed

---

## 🎯 **Next Steps**

1. ✅ Project set up
2. ⏳ Create homepage
3. ⏳ Create services pages
4. ⏳ Add portfolio section
5. ⏳ Add contact form with API
6. ⏳ Deploy to Vercel

---

## 📚 **Resources**

- Next.js Docs: https://nextjs.org/docs
- React Docs: https://react.dev
- Tailwind Docs: https://tailwindcss.com/docs

**Questions?** The structure is similar to Astro, just using React instead!

