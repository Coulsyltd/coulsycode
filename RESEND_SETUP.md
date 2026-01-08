# Resend Email Setup

This form now uses Resend instead of Netlify Forms - it's like the old PHP `mail()` function but modern and reliable.

## Setup Steps

### 1. Sign up for Resend (Free)
- Go to https://resend.com
- Sign up (free tier: 3,000 emails/month)
- Verify your email

### 2. Get Your API Key
- In Resend dashboard, go to **API Keys**
- Click **Create API Key**
- Copy the key (starts with `re_`)

### 3. Add to Netlify Environment Variables
- Go to Netlify Dashboard → Your Site → **Site Settings** → **Environment Variables**
- Click **Add variable**
- Key: `RESEND_API_KEY`
- Value: `re_HnQexvm2_G5tu3zZx9ZywdUUMwzjorthn`
- Click **Save**

### 4. Redeploy
- Netlify will automatically redeploy, or trigger a new deploy
- The form will work once the environment variable is set!

## How It Works

1. Form submits to `/api/contact` (Next.js API route)
2. API route receives form data
3. Resend sends email to `info@coulsycode.co.uk`
4. User sees success message

**That's it!** Much simpler than Netlify Forms.

## Update Email Address

To change where emails are sent, edit `app/api/contact/route.ts`:
- Change `to: "info@coulsycode.co.uk"` to your email

## Verify Your Domain (Optional)

For production, you should verify your domain in Resend:
- This lets you send from `noreply@coulsycode.co.uk` instead of `onboarding@resend.dev`
- Go to Resend → **Domains** → **Add Domain**
- Follow DNS setup instructions

For now, `onboarding@resend.dev` works fine for testing!
