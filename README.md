# Ogden Construction Website

This is the official marketing website for **Ogden Construction Inc**, a premier deck building and home remodeling company serving El Dorado County and surrounding areas in California.

---

## 🛠 Tech Stack

- **Next.js 15 (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**
- **Shadcn UI**
- **Vercel** (Hosting & Edge Functions)
- **Optimized for SEO & Lighthouse scores**

---

## 📁 Directory Structure

```
/src
  /app             # App router pages
  /components      # Reusable UI + layout components
  /public          # Static assets (images, OG images)
  /styles          # Tailwind and globals
  /hooks           # Custom hooks (e.g. use-toast)
```

---

## ✨ Features

- ✅ **Responsive Design**
- ✅ **Hero section with background image**
- ✅ **Quote request form with toast notifications**
- ✅ **Reusable layout with SSR optimization**
- ✅ **Client/server component splitting for performance**
- ✅ **Portfolio grid with testimonials and highlights**
- ✅ **Custom metadata (SEO + OG tags) per page**
- ✅ **Mobile-friendly navigation drawer**

---

## 🧠 SEO & Metadata

All pages are optimized for search engines with custom `<Metadata />`:

- Layout sets default site-wide OG metadata
- Individual pages like `/contact` and `/portfolio` override `title`, `description`, and `openGraph` where needed
- OG images are 1200x630 `.jpg` or `.webp` and live under `/public/og-images`

---

## 📍 Target Service Areas

Ogden Construction serves:

- Placerville
- El Dorado Hills
- Cameron Park
- Folsom
- South Lake Tahoe
- Shingle Springs
- Camino
- Pollock Pines
- Sacramento (select services)

These cities are reflected in metadata, portfolio copy, and service area sections.

---

## 🧪 Performance

- Optimized images with `next/image` and responsive sizing
- Largest Contentful Paint improved by using local images
- Layout component split into `Header`, `Footer`, and `ToasterProvider` to preserve server-side rendering

---

## 🧾 Available Scripts

```bash
pnpm dev       # Local dev server
pnpm build     # Production build
pnpm start     # Run after build
pnpm prettier  # Consistent Styling
```

---

## ✅ Deployment

This site is deployed to **Vercel** using CI from the production branch.

---

## 👤 Author

**Garret Grant**

- Live Site: [ogden-construction.com](https://ogden-construction.com)
- Site designed in collaboration with [**EDC Web Design**](https://edcwebdesign.com)
