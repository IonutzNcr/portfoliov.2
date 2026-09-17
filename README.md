# Portfolio v2

Portfolio React + TypeScript + Vite, reconstruit en architecture feature-first et aligne sur la maquette Stitch.

## Prerequis

- Node.js 24+
- npm 10+

## Installation

```bash
npm ci
```

## Developpement

```bash
npm run dev
```

## Verification qualite

Commande unique locale:

```bash
npm run check
```

Equivalent detaille:

```bash
npm run lint
npm run build
npm run test
```

## CI

Un workflow GitHub Actions execute lint, build et tests sur chaque push et pull request:

- .github/workflows/ci.yml

## Structure principale

- src/pages/home: composition de la page Home
- src/features/profile: section profil
- src/features/stack: section stack et logos technos
- src/features/projects: section projets
- src/features/contact: section contact + formulaire
- src/shared/layout: header et footer
