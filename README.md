# RENCO LLC — Website

High-end, story-driven marketing website for RENCO LLC (faith-based construction & remodeling, Gig Harbor / Seattle WA).

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Where Things Live

### Contact Info
All contact data is in the components themselves. To update globally:
- **Phone:** search `253-389-2606` — appears in `Header.tsx`, `Hero.tsx`, `CTASection.tsx`, `LeadForm.tsx`, `Footer.tsx`
- **Email:** search `david@renco.co`
- **License #:** `Footer.tsx` bottom bar

### Lead Form Webhook
`src/components/LeadForm.tsx`, line 5:

```ts
const LEAD_WEBHOOK_URL = "YOUR_WEBHOOK_URL_HERE";
```

Replace with your GoHighLevel / LeadConnector webhook URL. The form POSTs JSON:

```json
{
  "projectType": "bathroom",
  "timeline": "asap",
  "budget": "15-30k",
  "name": "Jane Doe",
  "phone": "253-555-1234",
  "email": "jane@example.com",
  "zip": "98335",
  "source": "renco-website",
  "timestamp": "2026-06-13T..."
}
```

---

## Image Drops

### Story Section (scrollytelling)
Drop into `/public/story/`:
| Filename | Usage |
|---|---|
| `before-1.jpg` | The "dated bathroom" before state |
| `during-plan-1.jpg` | Design/planning phase |
| `during-1.jpg` | Active construction / tile work |
| `after-1.jpg` | Finished bathroom reveal |

Aspect ratio: **3:4 portrait** works best. These also feed the before/after slider in the Story reveal.

### Before & After Showcase
Drop into `/public/showcase/`:
| Filename | Usage |
|---|---|
| `ba-bathroom-1-before.jpg` / `-after.jpg` | Master bath pair |
| `ba-bathroom-2-before.jpg` / `-after.jpg` | Guest bath pair |
| `ba-kitchen-1-before.jpg` / `-after.jpg` | Kitchen pair |
| `ba-full-1-before.jpg` / `-after.jpg` | Full renovation pair |

Aspect ratio: **4:3 landscape** works best for the sliders.

---

## Tech Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4**
- **Framer Motion** (scroll animations, form transitions, page reveals)
- **Google Fonts** — Cormorant Garamond (display) + DM Sans (body)
- Real gallery images served from existing CDN URLs

## Brand Colors

| Token | Hex | Use |
|---|---|---|
| Background base | `#0E0E0E` | Page background |
| Background surface | `#141414` | Card surfaces |
| Gold | `#C9A96A` | Primary accent |
| Gold light | `#E2C792` | Gradient highlight |
| Gold dark | `#B8945A` | Gradient shadow |
| Text primary | `#F2EDE4` | Headings, body |
| Text muted | `#9A9388` | Secondary text |
| Text subtle | `#6B6560` | Labels, captions |
