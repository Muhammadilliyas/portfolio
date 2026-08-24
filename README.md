# Dev Portfolio

A modern, code-editor-themed portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Design

- **Theme:** the whole site borrows the visual language of a code editor — file tabs for navigation, gutter line numbers on each section, a typing terminal hero, imports for skills, and a git-log timeline for experience.
- **Palette:** ink navy (`#0E1116`) / warm paper (`#F6F4EF`) with a dual amber (`#E8A33D`) + teal (`#5FB3A3`) accent system. Full light/dark toggle.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (code/labels).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Making it yours

**Everything you need to personalize lives in one file: `data/portfolio.ts`.**

Edit that file to update:
- Your name, role, tagline, location, and socials (`profile`)
- Your about copy and stats (`about`)
- Your skills, grouped by category (`skills`)
- Your projects, with stack, status, and links (`projects`)
- Your work history (`experience`)
- Contact section copy (`contact`)

No other file needs to change for basic customization.

### Optional tweaks

- **Colors:** edit the `ink`, `paper`, `amber`, `teal`, `rose` values in `tailwind.config.ts`.
- **Fonts:** swap the Google Fonts imports in `app/layout.tsx`.
- **Contact form:** by default, submitting the form opens the visitor's email client (`mailto:`). To wire up a real backend, set `contact.formEndpoint` in `data/portfolio.ts` to a form-handling endpoint (e.g. Formspree, Getform) — the form will POST JSON `{ name, email, message }` to it.
- **Resume link:** set `profile.resumeUrl` to a hosted PDF.

## Deploying

The fastest path is [Vercel](https://vercel.com/new) — connect the repo and it deploys automatically (zero config needed). Netlify and any Node host work too (`npm run build && npm run start`).

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (scroll reveals, hero animation)
- next-themes (light/dark mode)
- lucide-react (icons)
