# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Production build (outputs to dist/)
npm run preview    # Preview production build locally
```

No linter or test suite is configured. Always run `npm run build` after changes to confirm 0 errors before finishing.

## Architecture

Single-page React 18 portfolio for Gourav Batra. No routing — all content is on one scrollable page.

**Stack:** Vite 5 · React 18 · Tailwind CSS v3 · framer-motion 11 · lucide-react

**Path alias:** `@/` maps to `src/` (configured in `vite.config.js`).

### Key files

| File | Purpose |
|---|---|
| `src/constants/content.js` | **Single source of truth** for all copy and data — expertise, experience (6 roles), education, skills, volunteer, projects, dashboardScreenshots, stats. Edit here when updating any text content. |
| `src/constants/animations.js` | All framer-motion variants live here. Never define animation variants inline in components — import from this file. Also exports the shared `viewport` config (`once: true, amount: 0.15`). |
| `src/hooks/useTheme.js` | Reads/writes `localStorage` key `"theme"`, applies/removes `dark` class on `<html>`, falls back to `prefers-color-scheme`. Returns `{ theme, toggleTheme }`. |
| `src/index.css` | Tailwind directives + `@layer utilities` for custom classes: `.text-gradient-joy`, `.text-gradient-neon`, `.text-gradient-teal`, `.glass-card`, `.joy-card`, `.divider-gradient`. |
| `tailwind.config.js` | Custom color tokens (`navy`, `teal`, `charcoal`, `surface`, `border`) and font families (`sans` = Plus Jakarta Sans, `display` = Playfair Display). `darkMode: 'class'`. |

### Section render order (`src/App.jsx`)

`Hero` → `About` → `Expertise` → `Experience` → `Education` → `Skills` → `Projects` → `VolunteerWork` → `Contact`

`theme` prop is passed to `Hero` (for theme-reactive ring colors) and `toggleTheme` to `Navbar`.

### Component structure

```
src/
  components/
    layout/
      Navbar.jsx          — Fixed top bar; logo color, nav links, Sun/Moon toggle
    sections/             — One file per page section, each with id="..."
      Hero.jsx            — Theme-reactive conic-gradient profile ring (theme prop required)
      About.jsx           — Budapest-img.jpg overlaps Presentation-Photo.png bottom-right
      Expertise.jsx
      Experience.jsx      — Renders TimelineItem for all 6 roles
      Education.jsx       — 3-card grid with thesis callout on MBA card
      Skills.jsx          — 6 chip-group categories
      Projects.jsx        — ProjectCard × 2 + DashboardMasonry gallery
      VolunteerWork.jsx
      Contact.jsx         — Form left, small photo card + links right
    ui/
      DashboardMasonry.jsx — Masonry grid of 5 dashboard screenshots with lightbox
      ImageCarousel.jsx   — Tabbed screenshot carousel used inside ProjectCard
      ProjectCard.jsx
      ExpertiseCard.jsx
      TimelineItem.jsx
      StatCounter.jsx     — useInView animated number counter
      ContactForm.jsx
      SectionWrapper.jsx
  hooks/
    useTheme.js
    useScrolled.js        — Returns boolean when page scrolled past threshold
  constants/
    content.js
    animations.js
  assets/images/          — 11 image assets; all are used (see mapping below)
```

### Image → section mapping

| Asset | Used in |
|---|---|
| `me-suit-image.png` | Hero — circular profile |
| `Presentation-Photo.png` | About — main photo |
| `Budapest-img.jpg` | About — overlapping accent (`-bottom-4 -right-4 rotate-[-3deg]`) |
| `dashboard_overview.png` | DashboardMasonry — large 2×2 tile; Projects carousel |
| `dashboard_analytics.png` | DashboardMasonry; Projects carousel |
| `dashboard_organizations.png` | DashboardMasonry; Projects carousel |
| `dashboard_projects.png` | DashboardMasonry; Projects carousel |
| `expense_manager-dashboard.png` | DashboardMasonry; Projects carousel |
| `Stage-Speaking-Photo.jpg` | VolunteerWork card 1 |
| `Award-Ceremony-Photo.jpg` | VolunteerWork card 2 |
| `Sitting-on-Steps.jpg` | Contact — small identity photo card |

### Theme system

Two distinct visual identities controlled by Tailwind's `darkMode: 'class'` strategy:

- **Light "Joyful"** — `bg-amber-50` body, Playfair Display headings (`font-display`), orange/rose/teal gradient accents, `joy-card` utility
- **Dark "Billion-Dollar"** — `bg-zinc-950` OLED body, `font-sans`, blue/cyan neon accents, `glass-card` utility (`bg-white/5 backdrop-blur-xl`)

Hero profile ring colors switch via `theme` prop: light → `conic-gradient(orange, rose, teal)`, dark → `conic-gradient(blue, cyan)`.

### DashboardMasonry lightbox

`DashboardMasonry.jsx` maintains local `selected` state. Clicking any tile opens a fullscreen `AnimatePresence` overlay. Closes on backdrop click, X button, or Escape key.
