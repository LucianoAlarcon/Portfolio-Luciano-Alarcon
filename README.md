# Portfolio — Next.js 14 + Tailwind CSS

## Setup

```bash
npm install
npm run dev
```

## Estructura

```
src/
├── public/
│    └── mi-cv.pdf
├── app/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar/index.tsx
│   │   ├── CustomCursor/index.tsx
│   │   └── Footer/index.tsx
│   │
│   ├── sections/
│   │   ├── Hero/index.tsx
│   │   ├── Experience/index.tsx
│   │   ├── Projects/index.tsx
│   │   └── Contact/index.tsx
│   │
│   └── ui/
│       ├── SectionHeader/index.tsx
│       └── RevealObserver/index.tsx
│
├── lib/
│   └── data.ts          ← Todo el contenido del portfolio acá
│
├── styles/
│   └── globals.css
│
└── types/
    └── index.ts
```

## Personalización

Editá `src/lib/data.ts` para cambiar tu nombre, tecnologías, proyectos y links.

Para el CV: colocá tu archivo en `public/cv-tu-nombre.pdf` y actualizá `cvInfo.downloadPath`.
