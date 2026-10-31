# Naroun Cafe — A Website That Is Not Like the Others

![Naroun Cafe](./screenshots/01-hero.png)

> A modern, responsive, Persian (RTL) cafe website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.  
> Live demo: **https://imamirho3ein.github.io/naroun-cafe/**

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Build & Preview](#build--preview)
- [Deployment (GitHub Pages)](#deployment-github-pages)
- [Customization](#customization)
- [Author](#author)
- [License](#license)

---

## Overview

**Naroun Cafe** (کافه نارون) is a portfolio project showcasing a high-quality, animated, single-page cafe website. It was rebuilt from a reference video, extracting all on-screen Persian copy (e.g. "یه سایت که مثل بقیه نیست", "شیرینی‌هایی که همینجا پخته می‌شوند", "امروز دلتان چه می‌خواهد؟") and turning them into a polished, interactive experience.

The site is fully Persian (RTL), mobile-first, and ships with a floating "Messages Now" chat widget, interactive pastry cards, animated menu categories, and a coffee/beans section.

## Features

- 🎨 **Modern animated UI** — Framer Motion scroll reveals, hover effects, floating elements
- 📱 **Responsive** — mobile-first layout that scales to desktop
- 🇮🇷 **Persian / RTL** — proper right-to-left layout with the Vazirmatn font
- 🍰 **Interactive Pastries** — click a pastry to preview it in a featured card
- ☕ **Menu Categories** — drinks, food & dessert, tea
- 💬 **Chat Widget** — floating "Messages Now" bubble
- 🚀 **Auto-deploy** — GitHub Actions → GitHub Pages on every push to `main`
- ♿ **Accessible basics** — semantic sections, keyboard-focusable buttons, reduced-motion friendly (Framer Motion)

## Screenshots

### Hero — "A website that is not like the others"
![Hero](./screenshots/01-hero.png)

### Pastries — "Sweets baked right here"
![Pastries](./screenshots/02-pastries.png)

### Menu — "What does your heart want today?"
![Menu](./screenshots/03-menu.png)

## Tech Stack

| Layer | Technology |
| --- | --- |
| UI | React 19 |
| Build | Vite 8 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion |
| Font | Vazirmatn (Google Fonts) |
| Hosting | GitHub Pages (via GitHub Actions) |

## Project Structure

```
naroun-cafe/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages auto-deploy
├── public/                     # Static assets
├── screenshots/                # README screenshots
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Intro.jsx
│   │   ├── Pastries.jsx
│   │   ├── Menu.jsx
│   │   ├── Beans.jsx
│   │   ├── ChatWidget.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ (tested on v24)
- npm 9+

### Install

```bash
git clone https://github.com/Imamirho3ein/naroun-cafe.git
cd naroun-cafe
npm install
```

### Run in development

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

## Build & Preview

```bash
npm run build      # production build into ./dist
npm run preview    # preview the production build locally
```

## Deployment (GitHub Pages)

Deployment is fully automated. On every push to `main`, the workflow in `.github/workflows/deploy.yml`:

1. Checks out the code
2. Installs dependencies (`npm ci`)
3. Builds the project (`npm run build`)
4. Uploads `./dist` as a Pages artifact
5. Deploys to GitHub Pages

The live site is available at: **https://imamirho3ein.github.io/naroun-cafe/**

To enable Pages manually: **Settings → Pages → Source → GitHub Actions**.

## Customization

- **Colors / theme** — edit the CSS variables in `src/index.css` and the `colors` block in `tailwind.config.js`.
- **Content (Persian copy)** — strings live directly in the component files under `src/components/`.
- **Menu items** — update the `categories` array in `src/components/Menu.jsx`.
- **Pastries** — update the `pastries` array in `src/components/Pastries.jsx`.
- **Base path** — if you deploy under a different repo name, update `base` in `vite.config.js`.

## Author

**Amirhossein Jadidi** — Python / Django / React developer  
GitHub: [@Imamirho3ein](https://github.com/Imamirho3ein)

## License

This project is open source and available under the [MIT License](./LICENSE).
