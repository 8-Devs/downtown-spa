# Downtown Spa & Relaxation Centre — Modern Rebuild

A rebuild of [downtownspageorgetown.com](https://www.downtownspageorgetown.com/) as a modern, luxe-minimalist React + Tailwind site. The original Wix-built site has been restructured around a clearer navigation, an editorial visual language, and dedicated landing pages for the spa's signature practices.

## What's new

- **Rationalized nav.** The sprawling Wix menu (30+ items) is consolidated into 7 top-level routes: Home, Services, Menopause Spa, Wellness Room, About, Team, Contact.
- **Editorial layout.** Generous whitespace, serif/sans pairing (Cormorant Garamond + Inter), and a soft cream / clay / sage palette.
- **Single Services page.** All service categories (massage, facials, holistic, hands & feet, hair removal, colour analysis, men's spa) on one page with a sticky in-page nav.
- **Dedicated Menopause Spa & Wellness Room pages.** Both deserved their own narrative space — the original site buried them inside dropdowns.
- **Responsive, accessible, SEO-friendly.** Mobile menu, semantic markup, OG tags.

## Sitemap

```
/                 Home
/services         All services with anchored sub-sections
/menopause        Menopause Spa landing
/wellness         Wellness Room (CollagenTex, SEQEX, Vitamin-D)
/about            About + values
/team             Practitioner profiles
/testimonials     Client reviews
/gift-cards       Gift card purchase info
/contact          Contact form + map + hours
```

## Tech stack

- [Vite](https://vitejs.dev/) build tool
- [React 18](https://react.dev/) + [React Router 6](https://reactrouter.com/)
- [Tailwind CSS 3](https://tailwindcss.com/) with a custom design token set

## Getting started

```bash
# install
npm install

# run dev server (http://localhost:5173)
npm run dev

# production build
npm run build

# preview the build
npm run preview
```

## Customizing

- **Colors & typography** — `tailwind.config.js` defines the palette (`cream`, `clay`, `sage`, `ink`) and font families.
- **Global styles & components** — `src/index.css` (eyebrow, button, link-underline classes).
- **Content** — each page in `src/pages/` is self-contained; service lists, team bios, testimonials are simple JS arrays at the top of each file.
- **Imagery** — placeholder photos from Unsplash; swap the URLs with real spa photography before launch.

## Suggested next steps

1. Replace Unsplash placeholders with real photos of the spa, treatment rooms, and team.
2. Wire the contact form to a real backend (Formspree, Netlify Forms, or a simple Node endpoint).
3. Add a real booking integration (most spa management platforms — Vagaro, Mindbody — offer embeds).
4. Add a blog page if the original blog content will migrate.
5. Run Lighthouse and tighten image loading (use `loading="lazy"` and proper widths once real assets are in).
