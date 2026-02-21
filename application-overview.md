# Application Recreation Prompt: "The Boring Texts"

## Overview

Build a browser-based document generator called **"The Boring Texts"** that creates four essential legal documents for software repositories. The application must be entirely client-side with no server communication—all data processing happens in the user's browser.

---

## Core Functionality

### Purpose

Generate four customized legal documents based on user input:

1. **LICENSE.md** - An all-rights-reserved proprietary license
2. **README_NOTICE.md** - A proprietary notice for README files
3. **PRIVACY_POLICY.md** - A customizable privacy policy with three levels (Minimal, Standard, Comprehensive)
4. **ACCESSIBILITY.md** - A WCAG 2.1 AA accessibility statement

### User Flow

1. User lands on the main generator page with a form
2. User enters three fields:
   - **Company Name** (required text input)
   - **Year** (required, defaults to current year)
   - **Contact Email** (required email input)
3. User clicks "Generate Documents"
4. Form hides and output section appears with all four generated documents
5. Each document displays in a scrollable preview area
6. User can:
   - Toggle between three privacy policy levels (Minimal/Standard/Comprehensive)
   - Download individual documents via download buttons
   - Download all documents as a ZIP file
   - Click "Create Another" to return to the form and start over

### Privacy Policy Levels

Implement three distinct privacy policy templates:

**Minimal:**
- Emphasizes no data collection
- States no cookies, analytics, or tracking
- Acknowledges third-party infrastructure may collect standard technical info (IP, browser type, timestamps)
- States this data is not accessible to the site owner

**Standard (Default):**
- Balanced approach for typical websites
- Covers voluntary information users may provide
- Mentions automatically collected technical information
- Discusses cookies and tracking technologies
- Addresses third-party service providers
- Includes data retention ("as long as necessary")
- Lists basic user rights (access, correction, deletion)

**Comprehensive:**
- Extensive data collection disclosure
- Categories: directly provided, automatically collected, third-party sources
- Detailed usage purposes including advertising, ML training, profiling
- Extensive cookies/tracking/behavioral analytics section
- Third-party sharing with service providers and advertisers
- Long retention periods for analytics/research
- Data sales disclosure under privacy laws
- International data transfer section
- Detailed user rights enumeration

---

## Technical Requirements

### Tech Stack

- **HTML5** with semantic markup and ARIA attributes
- **CSS3** with custom properties, flexbox, grid, and animations
- **JavaScript (ES2020+)** using ES modules
- **esbuild** for bundling and minification
- **jszip** (loaded from CDN) for ZIP file creation
- **No backend** - entirely client-side

### File Structure

```
project/
├── src/
│   ├── index.html              # Main generator page
│   ├── privacy.html            # Privacy policy info page
│   ├── accessibility.html      # Accessibility statement page
│   ├── styles/
│   │   └── main.css            # All application styles
│   └── js/
│       ├── app.js              # Main entry point
│       ├── download.js         # Blob URL and ZIP utilities
│       └── templates/
│           ├── license.js      # License template
│           ├── readme.js       # README notice template
│           ├── privacy.js      # Privacy policy (3 levels)
│           └── accessibility.js # Accessibility statement
├── build.js                    # Production build script
├── serve.js                    # Development server
└── package.json
```

### Build System

**Development (`npm run dev`):**
- Watch `src/` directory for changes
- Rebuild on file changes with 200ms debounce
- Serve `dist/` directory on localhost:3000
- Include sourcemaps

**Production (`npm run build`):**
- Clean and recreate `dist/` directory
- Copy all HTML and CSS files
- Bundle JavaScript into single IIFE file (`app.bundle.js`)
- Minify JavaScript
- Rewrite HTML script tags from ES module to bundled script with `defer`
- Target ES2020

### JavaScript Architecture

**app.js (Main Entry):**
- Cache all DOM references on load
- Set default year to current year
- Handle form submission:
  - Validate form
  - Extract values
  - Generate all four documents using template functions
  - Create blob URLs for each
  - Update DOM with content and download links
  - Toggle visibility (hide form, show output)
  - Announce status via live region
- Handle privacy level toggle:
  - Update active state and `aria-checked`
  - Regenerate only the privacy policy
  - Revoke old blob URL, create new one
- Handle "Create Another" button:
  - Revoke all blob URLs
  - Toggle visibility back to form
  - Scroll to top
- Handle "Download All" button:
  - Collect all document contents
  - Create ZIP file
  - Trigger download

**download.js (Utilities):**
- `createBlobUrl(content)` - Create blob URL with type `text/markdown;charset=utf-8`
- `revokeUrls()` - Revoke all cached blob URLs
- `downloadAllZip(files)` - Create ZIP with JSZip, trigger download

**Template Files:**
Each exports a single function that takes user inputs and returns a markdown string using template literals.

### Pages

**index.html (Main Generator):**
- Skip link for accessibility
- Header with app name and tagline
- Form section with input fields in a card
- Output section (initially hidden) with four collapsible document cards
- Privacy level toggle in the privacy policy card
- Footer with navigation links and attribution
- Load jszip from CDN with SRI integrity hash
- Load app.js as ES module

**privacy.html:**
- Information about the tool's privacy practices
- Explains: no data collection, no cookies, no analytics
- Documents third-party services (fonts, hosting)
- Back link to generator

**accessibility.html:**
- Accessibility commitment statement
- Lists implemented accessibility features
- Documents known limitations
- Feedback contact information
- Back link to generator

---

## Document Templates

### LICENSE.md Template

Generate an "All Rights Reserved License" with:
- Copyright declaration with company name and year
- "No License Granted" section with comprehensive restrictions (no use, copy, modify, merge, publish, distribute, sublicense, sell)
- Disclaimer of Warranties (AS IS, no warranty)
- Limitation of Liability (no liability for damages)
- "No Obligation" section (owner has no duty to provide support)
- Contact email for licensing inquiries

### README_NOTICE.md Template

Short proprietary notice containing:
- Statement that software is proprietary
- No use permitted without express written permission
- Reference to LICENSE file for full terms
- Contact email for licensing inquiries

### PRIVACY_POLICY.md Template

See "Privacy Policy Levels" section above for the three template variations.

### ACCESSIBILITY.md Template

Generate WCAG 2.1 AA accessibility statement with:
- Commitment statement
- Accessibility features (semantic HTML, keyboard navigation, visual accessibility, ARIA support, motion respect)
- Known limitations section
- Conformance status ("aim to conform" language)
- Feedback and contact procedures
- Complaint procedures
- Contact email

---

## Accessibility Requirements (WCAG 2.1 AA)

- Semantic HTML structure (`<header>`, `<main>`, `<footer>`, `<section>`)
- Skip link to main content
- All interactive elements keyboard accessible
- Visible focus indicators (2px solid outline with 2px offset)
- ARIA attributes where needed:
  - `aria-labelledby` for sections
  - `aria-live="polite"` for status messages
  - `role="status"` for live regions
  - `role="radio"` and `aria-checked` for toggle buttons
- High color contrast ratios meeting AA standards
- Respects `prefers-reduced-motion` media query
- Form labels properly associated with inputs
- Responsive to 200% zoom without horizontal scrolling

---

## Design Language & Styling Guide

### Design Philosophy

The application uses a clean, minimal, professional aesthetic that prioritizes readability and usability. The design language emphasizes:

- **Clarity** - Clear visual hierarchy with well-defined sections
- **Trust** - Professional appearance appropriate for legal documents
- **Accessibility** - High contrast, visible focus states, respects user preferences
- **Simplicity** - Minimal visual noise, focused on the task

### Color Palette

```css
/* Primary Colors */
--text: #102028;                      /* Primary text - dark blue-gray */
--muted: #465d68;                     /* Secondary text - medium gray */
--accent: #0f9d8a;                    /* Primary accent - teal/cyan */
--accent-dark: #08735f;               /* Dark accent - deep teal */
--accent-soft: #bdf6ec;               /* Light accent - pale teal */

/* Surfaces */
--surface: rgba(255, 255, 255, 0.92); /* Card backgrounds - semi-transparent white */
--surface-strong: #ffffff;            /* Full white surfaces */
--border: rgba(16, 32, 40, 0.12);     /* Subtle borders */

/* Feedback */
--danger: #b42318;                    /* Error/danger - red */

/* Shadows */
--shadow: 0 18px 40px rgba(21, 61, 71, 0.14);  /* Soft elevation shadow */

/* Background */
body-background: #f5f7f8;             /* Page background - light gray */

/* Code/Preview Areas */
code-background: #f4fbff;             /* Very light blue */
code-border: #d7e8ee;                 /* Light blue-gray border */
```

### Typography

```css
/* Font Stacks */
--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
--font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

/* Base Settings */
body {
  font-family: var(--font-sans);
  line-height: 1.5;
  color: var(--text);
}

/* Headings */
h1: clamp(1.8rem, 4.2vw, 2.45rem);    /* Fluid sizing */
h2: 1.2rem;
h3: 1rem;

/* Body Text */
base-text: 0.92rem - 0.96rem;
small-text: 0.78rem - 0.84rem;

/* Code/Monospace */
code, pre, input, select {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  line-height: 1.55;
}
```

### Spacing System

```css
/* Base Unit: 1rem */
--space-xs: 0.45rem;
--space-sm: 0.7rem;
--space-md: 1rem;
--space-lg: 1.2rem - 1.3rem;
--space-xl: 2rem;

/* Layout */
max-content-width: 760px;
body-padding-mobile: 1.25rem;
body-padding-desktop: 2rem 1.4rem;

/* Component Gaps */
form-gap: 0.9rem;
button-gap: 0.55rem;
card-gap: 1rem;
```

### Border Radius

```css
--radius-sm: 0.5rem;
--radius-md: 0.7rem;
--radius-lg: 0.75rem;
--radius-xl: 1rem;
--radius-full: 999px;        /* Pill shape for buttons */
```

### Component Patterns

**Cards:**
```css
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1rem;
  box-shadow: var(--shadow);
  padding: 1rem;                      /* Mobile */
  padding: 1.2rem 1.3rem;             /* Desktop */
}
```

**Form Inputs:**
```css
input, select {
  min-height: 2.75rem;
  padding: 0.55rem 0.7rem;
  border: 1px solid var(--border);
  border-radius: 0.7rem;
  font-family: monospace;
  background: var(--surface-strong);
}

input:focus {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

input:user-invalid {
  border-color: var(--danger);
}
```

**Buttons:**
```css
button {
  border-radius: 999px;               /* Pill shape */
  padding: 0.62rem 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 120ms ease, box-shadow 150ms ease, background 160ms ease;
}

button:hover {
  transform: translateY(-1px);        /* Subtle lift effect */
}

button:focus {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

**Primary Button:**
```css
.btn-primary {
  background: linear-gradient(120deg, var(--accent), #20b89f);
  color: white;
  box-shadow: 0 8px 16px rgba(15, 157, 138, 0.25);
}

.btn-primary:hover {
  background: linear-gradient(120deg, var(--accent-dark), #0f9d8a);
}
```

**Secondary Button:**
```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #e9f0f3;
  color: #163845;
}
```

**Toggle Buttons:**
```css
.toggle-button {
  background: #e9f0f3;
  color: #3a5260;
  border: none;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
}

.toggle-button.active {
  background: linear-gradient(120deg, var(--accent), #20b89f);
  color: white;
  box-shadow: 0 4px 12px rgba(15, 157, 138, 0.3);
}
```

**Code/Preview Blocks:**
```css
pre {
  min-height: 5.2rem;
  max-height: 22rem;
  overflow: auto;
  padding: 0.9rem;
  background: #f4fbff;
  border: 1px solid #d7e8ee;
  border-radius: 0.75rem;
  font-family: monospace;
  white-space: pre-wrap;
}
```

### Animations

**Rise In (for cards appearing):**
```css
@keyframes rise-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: rise-in 0.52s ease;
}
```

**Pulse (for decorative elements):**
```css
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}

.heart {
  animation: pulse 1.2s ease-in-out infinite;
}
```

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Responsive Breakpoints

```css
/* Mobile First - Base styles apply to mobile */

/* Desktop: 700px and up */
@media (min-width: 700px) {
  body {
    padding: 2rem 1.4rem;
  }

  .card {
    padding: 1.2rem 1.3rem;
  }

  .form-grid {
    grid-template-columns: 1fr 1fr;  /* Two columns */
  }

  .full-width {
    grid-column: 1 / -1;             /* Span both columns */
  }
}
```

### Focus States

All interactive elements must have visible focus indicators:

```css
:focus {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

/* Skip link */
.skip-link {
  position: fixed;
  top: -100px;
  left: 1rem;
  background: var(--accent);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  z-index: 1000;
}

.skip-link:focus {
  top: 1rem;
}
```

### Icons

Use inline SVGs for icons (GitHub Octicons recommended):
- Download icon for download buttons
- Keep icons at 16x16 or 20x20 size
- Match icon color to button text color

---

## Privacy & Security

The application must:
- Process all data client-side only
- Never send data to any server
- Not use cookies, localStorage, or sessionStorage
- Not include analytics or tracking
- Load external resources only from trusted CDNs with SRI integrity hashes
- Document all third-party dependencies

---

## Deployment

Configure GitHub Actions for automatic deployment to GitHub Pages:
- Trigger on push to main branch
- Use Node.js 22
- Run `npm ci` for clean dependency install
- Run `npm run build` for production build
- Deploy `dist/` directory to GitHub Pages

---

## Summary

This application is a privacy-focused, accessible, client-side document generator with a clean, professional design. Key characteristics:

- **Entirely client-side** - No server, no data transmission
- **Accessible** - WCAG 2.1 AA compliant
- **Professional design** - Teal accent, clean typography, subtle shadows
- **Responsive** - Mobile-first with desktop enhancements
- **Fast** - Small bundle size, no frameworks
- **Privacy-respecting** - No tracking, no cookies, no analytics
