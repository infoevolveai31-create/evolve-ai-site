# Evolve AI — Website

A Next.js 16 (App Router) marketing site for Evolve AI: hybrid AI agency + product studio.

## What's included

- **Home** — hero, services overview, product teaser, FAQ, CTA
- **Services** — 4 core offerings with process/methodology
- **Product** — platform features, product screenshot mockup, integrations
- **Pricing** — 3-tier pricing with FAQ
- **Blog** — index + 3 sample posts (dynamic routes)
- **About** — mission, story, values
- **Contact** — form + booking CTA + contact info
- **Privacy Policy / Terms of Service / Security** — real legal pages

Service, pricing, and blog copy is illustrative — replace with your real offerings and content in `src/lib/data.ts`, or the individual `page.tsx` files for hero copy and layout. Fabricated case studies, testimonials, team bios, client logos, and stats have been removed rather than shipped as placeholder claims — add these back with real proof points once you have them.

## Brand

- Colors, fonts, and the logo mark are defined to match your uploaded logo (dark navy background, teal → blue → indigo gradient). Recreated as a scalable SVG component (`src/components/Logo.tsx`) since the original raster file wasn't accessible from this session — swap in your actual logo file if you'd like pixel-perfect match.
- Fonts: Space Grotesk (headings) + Inter (body), loaded via Google Fonts `<link>` tags in `src/app/layout.tsx`.
- Theme tokens (colors) live in `src/app/globals.css` under `:root` / `@theme inline`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Deploy

This is a standard Next.js app — deploys cleanly to Vercel (recommended, zero config), Netlify, or any Node host. Point your purchased domain's DNS at whichever host you choose once deployed.

## Next steps to make this "yours"

1. Replace placeholder copy in `src/lib/data.ts` (services, pricing, blog posts) with real content.
2. Add real case studies, testimonials, team bios, client logos, and stats once you have them to share — these were intentionally removed rather than shipped as fabricated content.
3. Swap in your real logo file if you have the original asset, and update `src/components/Logo.tsx`.
4. Connect your domain once deployed.
