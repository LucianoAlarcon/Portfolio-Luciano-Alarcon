# Portfolio Tailwind Project Context

## Overview
This is a Next.js 14 portfolio website built with TypeScript, Tailwind CSS, and internationalization (next-intl). It showcases Luciano Alarcón's work as a Full Stack Developer.

## Tech Stack
- **Framework**: Next.js 14.2.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Internationalization**: next-intl 4.8.3
- **Dependencies**: React 18, React DOM 18
- **DevTools**: Autoprefixer, Postcss, TypeScript

## File Structure
```
/src
  /app/[locale]/
    layout.tsx      - Root layout with i18n provider
    page.tsx        - Main page composing all sections
  /components
    /layout
      Navbar.tsx        - Navigation bar with scroll effect
      LanguageSwitcher  - Language toggle component
      Footer.tsx        - Footer with copyright
      CustomCursor.tsx  - Custom mouse cursor (referenced but not shown in files)
      SectionHeader.tsx - Reusable section header component
    /sections
      Hero.tsx          - Landing section with name and CTAs
      Experience.tsx    - Skills and technologies showcase
      Projects.tsx      - Portfolio projects grid
      Contact.tsx       - Contact information and CV download
    /ui
      RevealObserver.tsx - Intersection observer for animations
      SectionHeader.tsx  - Reusable section header
  /hooks
    useClickOutside.ts  - Custom hook for click detection
  /lib
    data.ts             - All site configuration and data
  /messages
    en.json             - English translations
    es.json             - Spanish translations
  /styles
    globals.css         - Global styles including Tailwind directives
  /types
    index.ts            - TypeScript type definitions
/public
  icons/flags/          - Language flag SVGs
  icons/Globe.svg       - Globe icon
  Luciano_Alarcon_Fullstack_CV.pdf - CV file
```

## Key Features
1. **Dark Theme UI** - Sophisticated dark color scheme with accent colors
2. **Animated Elements** - Background grids, glowing effects, scroll-triggered animations
3. **Responsive Design** - Mobile-first approach with Tailwind breakpoints
4. **Internationalization** - English/Spanish support with next-intl
5. **Interactive Components** - Hover effects, custom cursor, tabbed interface
6. **Performance Optimized** - Static generation, efficient CSS, code splitting

## Color Scheme (from tailwind.config.js)
- Background: #080c10
- Surface: #0e141c
- Border: #1e2a38
- Accent: #00e5c3 (primary cyan)
- Accent2: #ff6b35 (secondary orange)
- Text: #e8edf2
- Muted: #5a6a7a
- Card: #111820

## Typography
- Headings: Syne font (variable weight)
- Body/Mono: DM Mono font

## Current Sections
1. **Hero** - Introduction with name, description, and CTAs
2. **Experience** - Skills organized by category (Frontend, Backend, DevOps)
3. **Projects** - Grid showcasing 4 featured projects with links
4. **Contact** - Tabbed interface for contact info and CV download

## Animation System
- Uses CSS keyframes defined in tailwind.config.js
- RevealObserver component uses IntersectionObserver to trigger animations
- Various fade-up animations with staggered delays
- Scroll line animation, pulse effects, tech bar width animation

## Performance Characteristics
- Static site generation for fast initial load
- Minimal JavaScript bundle size
- Efficient Tailwind CSS utility-first approach
- No external API calls during initial render
- Optimized for SEO with proper HTML structure

## Known Limitations / Areas for Improvement
1. **Performance**: Background animations may cause repaints on scroll/resize
2. **Responsiveness**: Could benefit from more breakpoint granularity
3. **Accessibility**: Color contrast needs verification, missing ARIA labels
4. **Custom Cursor**: Potential performance impact from mouse-following JS
5. **Image Optimization**: No usage of Next.js Image component
6. **Locale Detection**: Relies solely on URL params, no browser language fallback

## Data Flow
1. Layout loads locale from URL params
2. Layout fetches appropriate JSON messages file
3. Layout provides messages to children via NextIntlClientProvider
4. Sections consume translations via useTranslations hook
5. Site data (skills, projects, etc.) imported from @/lib/data
6. UI state managed locally in components (navbar scroll state, contact tabs)

## Build & Deployment
- Scripts: dev (next dev), build (next build), start (next start), lint (next lint)
- Output: Next.js optimized build in .next directory
- Static exports possible via generateStaticParams in layout