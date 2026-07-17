# Professional Portfolio Website - Phase 2 (Hero Section Completed)

This repository represents the initial foundation and the complete Phase 2 implementation of a clean, responsive, and modern portfolio website. It establishes a dark, futuristic developer-focused Hero Section using native web technologies (HTML5, CSS3, and ES6 Modules) without build tools or third-party libraries.

---

## Project Overview

- **Stack:** HTML5, CSS3, Vanilla JavaScript (ES6+ Modules)
- **Architecture:** Mobile-first, component-based, modular structure
- **Completed Phases:**
  - **Phase 1:** Directory structure, configuration, boilerplate code, base stylesheets, and empty JS initializers.
  - **Phase 2:** Premium, centered Hero Section introducing the developer with modern layouts, typography scaling, ambient animations, and typing effects.

---

## Completed: Phase 2 Hero Section

The Hero Section inside [index.html](index.html) introduces **Karthik S Kailas** with the following visual highlights:
- **Centered Layout:** Everything is vertically and horizontally centered with semantic HTML5 elements.
- **Greeting & Large Typography Name:** The name is the primary visual focus, using extra bold sizing with a custom linear gradient and an ambient radial glow backdrop.
- **Developer Tagline:** elegance-focused tagline presenting professional achievements.
- **Typing Introduction:** An interactive typewriter effect (coded in [animations.js](js/animations.js)) that typewrites the developer description.
- **CTA Actions:** Three primary buttons with micro-lift and shadow hover animations:
  1. *View Projects* (Primary Action)
  2. *Download Resume* (Secondary Action)
  3. *Contact Me* (Outline Action)
- **Social Media links:** Interactive hover states with custom vector SVGs pointing to GitHub, LinkedIn, Twitter/X, and Email.
- **Ambient Background:** Animated floating blur nodes and a radial-masked wireframe grid overlay that supports content legibility.
- **Scroll Down Indicator:** Continuously loops a responsive mouse wheel scroll animation.

---

## Folder Structure

The project directory is structured as follows:

```text
portfolio/
├── index.html            # Completed Hero Section page
├── about.html            # About page (Phase 1 structure)
├── projects.html         # Projects page (Phase 1 structure)
├── contact.html          # Contact page (Phase 1 structure)
│
├── css/
│   ├── variables.css     # Dark futuristic design tokens (updated)
│   ├── utilities.css     # Generic helper and utility classes
│   ├── animations.css    # Ambient and typing keyframes (updated)
│   ├── responsive.css    # Target breakpoints and typography scaling (updated)
│   └── style.css         # Reset and global hero styling (updated)
│
├── js/
│   ├── main.js           # App bootstrapper (loads initializers)
│   ├── navigation.js     # Navigation module placeholder
│   ├── animations.js     # Typewriter animation handler (updated)
│   ├── projects.js       # Projects grid placeholder
│   └── contact.js        # Contact form handler placeholder
│
└── assets/
    ├── images/           # Showcase graphics, photographs
    ├── icons/            # SVG vector icons
    ├── logos/            # Brand marks, favicon files
    ├── fonts/            # Custom self-hosted fonts
    └── pdf/              # CVs, resumes, downloads
```

---

## Coding Conventions

### 1. HTML5
- Use strictly semantic HTML elements (e.g., `<header>`, `<main>`, `<section>`, `<a>`, `<svg>`).
- Maintain consistent 4-space indentation.
- Document sections using comments.
- Zero inline styles or inline JS.

### 2. CSS3
- Write CSS rules starting with a mobile-first mobile view, layering overrides inside min-width media queries in `responsive.css` using parent specificity class chains (e.g. `.hero .hero-name`).
- Rely heavily on CSS variables declared in `variables.css` for styling values to ensure styling uniformity.

### 3. JavaScript (ES6)
- Keep all files modular and scope variables with `'use strict';`.
- Standardize exports using ES Modules (`export`/`import` syntax).
- Document each module with a JSDoc block.

---

## How to Run Locally

Since this codebase contains native ES6 Javascript modules (`type="module"`), loading the files directly via the browser's `file://` protocol will cause CORS policy restrictions. You need to serve the site using a local HTTP development server.

### Option 1: VS Code Live Server
1. Install the **Live Server** extension in VS Code.
2. Click the **Go Live** button in the status bar at the bottom right.

### Option 2: Node.js (npx)
If you have Node.js installed, run:
```bash
npx serve portfolio
```
Or:
```bash
npx http-server portfolio
```

### Option 3: Python
If you have Python installed:
```bash
# Python 3
python -m http.server --directory portfolio 8000
```
Then open `http://localhost:8000` in your web browser.
