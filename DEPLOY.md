# Lucky Services Centre — Deployment Guide

## Quick Deploy on Vercel (Recommended — Free)

1. Push this folder to a GitHub repository
2. Go to vercel.com → New Project → Import your repo
3. Framework: Next.js (auto-detected)
4. Click Deploy → Done ✅

## After Deploy — DO THESE:

### 1. Google Search Console (15 min)
- Go to search.google.com/search-console
- Add property → your domain
- Verify ownership (HTML tag method)
- Paste the verification code in app/layout.tsx:
  ```
  verification: { google: 'YOUR_CODE_HERE' }
  ```
- Submit sitemap: https://www.luckyservicescentre.com/sitemap.xml

### 2. Google Business Profile (30 min)
- Update description to include "AC repair Mirpur from ৳399"
- Add all 6 services with prices
- Add your website URL
- Start collecting Google reviews from customers

## Project Structure
```
app/
  layout.tsx          ← SEO metadata, schemas, global providers
  page.tsx            ← Home page (Hero + FeaturedServices)
  globals.css         ← Tailwind + custom styles
  not-found.tsx       ← 404 page
  services/[category]/
    page.tsx          ← Dynamic service pages (ac, fridge, washing, etc.)

components/
  Header.tsx
  Hero.tsx
  FeaturedServices.tsx
  ServiceLists.tsx
  BookingModal.tsx    ← Order ID + clean WhatsApp format
  BookingModalWrapper.tsx
  Footer.tsx
  FloatingCall.tsx
  ErrorBoundary.tsx

contexts/
  BookingContext.tsx  ← Global booking modal state

data/
  services.ts         ← All 40+ services with prices

types/
  index.ts

public/
  sitemap.xml         ← All 7 URLs for Google
  robots.txt
```

## What Changed vs Old Vite Project
- ✅ Next.js 14 App Router (SSR/SSG — Google can read all content)
- ✅ Each service category has its own URL + metadata
- ✅ Full SEO metadata via Next.js Metadata API
- ✅ LocalBusiness + FAQ + Service JSON-LD schemas
- ✅ Image optimization with next/image
- ✅ BookingModal with Order ID (LSC-YYMMDD-XXXX)
- ✅ Clean WhatsApp message format (no emoji)
- ✅ Sitemap with all 7 pages
- ✅ Zero design/layout/functionality changes
