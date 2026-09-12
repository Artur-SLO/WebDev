# Portfolio Hub

Artur Vítor’s portfolio and project directory for [WebDev](https://github.com/Artur-SLO/WebDev), built with React, TypeScript, Vite, and CSS Modules.

The original centered hero, dark palette, gradient buttons, and project cards are preserved. The updated header adds an active-section indicator, direct profile links, keyboard navigation, and an animated mobile disclosure menu. Scroll reveals use IntersectionObserver and CSS, with no extra runtime animation or UI dependency. Content remains visible without IntersectionObserver; reduced-motion preferences disable the animation.

## Content and layout

- Introduction → projects → experience and education → competencies → GitHub activity.
- Marvin and Deltasong lead the project grid, followed by Studex, Face Recognition, Shopping Cart, and CV Application.
- Source-only projects have a repository action; live applications retain their demo links.
- Project descriptions emphasize verified implementation details: CDI / JUnit / Mockito, Qdrant / Ollama, native TCP sockets, and Firebase / shared services.
- Repeated project summaries were removed from the experience section. GitHub failures never substitute invented repository counts.

Edit project and career information in `src/data/projects.ts`, and header labels in `src/data/navigation.ts`. Header behavior is split between `components/Navbar.tsx` and `hooks/useActiveSection.ts`; reusable scroll animation lives in `components/Reveal.tsx`.

## Development

```bash
npm ci
npm run dev
npm run build
npm run lint
```

The app retains the `/WebDev/` base path and the existing GitHub Pages deployment structure. Validate changes with `npm run build`, `npm run lint`, and a manual review of desktop/mobile layouts, keyboard navigation, and reduced-motion behavior.
