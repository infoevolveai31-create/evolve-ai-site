# Evolve AI — Website

A Next.js 16 (App Router) marketing site for Evolve AI: hybrid AI agency + product studio.

## What's included

- **Home** — hero, social proof, services overview, product teaser, case study highlights, testimonials, FAQ, CTA
- **Services** — 4 core offerings with process/methodology
- **Product** — platform features, product screenshot mockup, integrations
- **Case Studies** — index + 3 detailed case study pages (dynamic routes)
- **Pricing** — 3-tier pricing with FAQ
- **Blog** — index + 3 sample posts (dynamic routes)
- **About** — mission, story, values, team
- **Contact** — form + booking CTA + contact info

All copy is placeholder content written to sound like a real AI agency — replace with your real services, case studies, team, and pricing before launch. Edit `src/lib/data.ts` for most content, or the individual `page.tsx` files for hero copy and layout.

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

1. Replace placeholder copy in `src/lib/data.ts` (services, case studies, pricing, team, blog posts, testimonials) with real content.
2. Swap in your real logo file if you have the original asset, and update `src/components/Logo.tsx`.
3. Wire the contact form (`src/components/ContactForm.tsx`) to a real backend (e.g. Resend, Formspree, or your own API route) — it currently just shows a success state on submit.
4. Add real analytics (Plausible, GA, PostHog) in `src/app/layout.tsx`.
5. Connect your domain once deployed.
