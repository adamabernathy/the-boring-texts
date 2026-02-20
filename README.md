# The Boring Texts

![Deploy to GitHub Pages](https://github.com/adamabernathy/all-rights-reserved/actions/workflows/deploy.yml/badge.svg)

A browser-based tool that generates the boring-but-necessary legal documents for your repository — LICENSE, README notice, Privacy Policy, and Accessibility Statement. Everything runs client-side; no data is sent to a server.

## Features

- Generate an all-rights-reserved `LICENSE.md` with your company name, year, and contact email
- Generate a matching proprietary README notice
- Generate a Privacy Policy with three levels: Minimal, Standard, or Comprehensive
- Generate a WCAG 2.1 AA Accessibility Statement
- Download files individually or as a `policy-docs.zip`
- No server, no build step — just HTML, CSS, and ES modules

## Usage

1. Enter your company name, year, and contact email
2. Click **Generate Documents**
3. For the Privacy Policy, toggle between **Minimal**, **Standard**, and **Comprehensive** levels
4. Click **Download** on any section, or **Download All** to get a zip of everything

## Project Structure

```text
src/
├── index.html
├── privacy.html
├── accessibility.html
├── styles/
│   └── main.css                # All styles
└── js/
    ├── app.js                  # Entry point — DOM refs, events, UI state
    ├── download.js             # Blob URL lifecycle, zip download
    └── templates/
        ├── license.js          # License template
        ├── readme.js           # README notice template
        ├── privacy.js          # Privacy policy template (3 levels)
        └── accessibility.js    # Accessibility statement template
```

## Development

```sh
git clone git@github.com:adamabernathy/all-rights-reserved.git
cd all-rights-reserved
npm install
npm run dev
```

This builds the project into `dist/`, starts a dev server at `http://localhost:3000`, and watches `src/` for changes with automatic rebuilds.

| Command         | Description                             |
|-----------------|-----------------------------------------|
| `npm run dev`   | Build + serve + watch                   |
| `npm run build` | Production build (minified) to `dist/`  |

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to `main`. The workflow runs `npm run build` to bundle and minify all assets, then deploys the `dist/` directory. To enable this, go to your repository **Settings > Pages** and set the source to **GitHub Actions**.

## Disclaimer

This tool is provided for informational purposes only and does not constitute legal advice. The generated documents are generic templates and may not be suitable for your specific needs. No attorney-client relationship is created by using this tool. Consult a qualified attorney for legal guidance tailored to your situation.

## License

This project is licensed under the [MIT License](LICENSE.md).
