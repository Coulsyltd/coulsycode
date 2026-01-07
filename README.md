# Coulsy Code - Web Development Portfolio

**Domain:** coulsycode.com (to be registered)  
**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS  
**Purpose:** Enterprise web development portfolio site

---

## 🚀 **Quick Start**

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev
# → Opens http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

---

## 📁 **Project Structure**

```
coulsycode/
├── app/                    # Main application (App Router)
│   ├── layout.tsx         # Root layout (wraps all pages)
│   ├── page.tsx           # Homepage (/)
│   ├── about/             # About page (/about)
│   │   └── page.tsx
│   ├── services/          # Services page (/services)
│   │   └── page.tsx
│   └── api/               # API routes (backend)
│       └── contact/
│           └── route.ts   # POST /api/contact
├── components/            # Reusable React components
├── public/               # Static files (images, etc.)
└── package.json          # Dependencies
```

---

## 🎯 **Key Differences from Astro**

| Astro | Next.js |
|-------|---------|
| `.astro` files | `.tsx` files (React) |
| `class=` | `className=` |
| Frontmatter `---` | TypeScript/React |
| Static by default | Can be static OR dynamic |
| No backend | Built-in API routes ✅ |

---

## 📝 **Creating a New Page**

Create a file: `app/services/page.tsx`

```typescript
export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">Our Services</h1>
      <p>Web development services...</p>
    </div>
  )
}
```

This automatically creates the route: `/services`

---

## 🎨 **Styling**

Uses Tailwind CSS (same as Astro!):

```typescript
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hello World
</div>
```

**Note:** Use `className` not `class` (React requirement)

---

## 🔧 **API Routes (Backend)**

Create: `app/api/contact/route.ts`

```typescript
export async function POST(request: Request) {
  const data = await request.json()
  // Process form submission
  return Response.json({ success: true })
}
```

This creates: `POST /api/contact`

---

## 📚 **Documentation**

- **Next.js Guide:** See `NEXTJS_GUIDE.md` for detailed explanation
- **Tech Stack Analysis:** See `TECH_STACK_ANALYSIS.md` for why Next.js
- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev

---

## 🎯 **Next Steps**

1. ✅ Project set up
2. ⏳ Create homepage content
3. ⏳ Create services pages
4. ⏳ Add portfolio section
5. ⏳ Add contact form with API
6. ⏳ Deploy to Vercel

---

## 💡 **Why Next.js?**

- **Enterprise Credibility** - Industry-standard framework
- **Full-Stack Capabilities** - Can showcase APIs, databases
- **Live Demos** - Interactive portfolio examples
- **Future-Proof** - Can add features as needed

**Astro is great for quick client sites, Next.js showcases enterprise capabilities!**
