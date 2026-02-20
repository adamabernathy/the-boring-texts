# All Rights Reserved License Generator

![Deploy to GitHub Pages](https://github.com/adamabernathy/all-rights-reserved/actions/workflows/deploy.yml/badge.svg)

A browser-based tool that generates a proprietary `LICENSE.md` and a README notice for your repository. Everything runs client-side — no data is sent to a server.

## Features

- Generate an all-rights-reserved `LICENSE.md` with your company name, year, and contact email
- Generate a matching proprietary README notice
- Download both files directly from the browser
- No server, no dependencies — just HTML, CSS, and JavaScript

## Usage

1. Enter your company name, year, and contact email
2. Click **Preview** to generate the license and notice text
3. Click **Download LICENSE.md** or **Download README Notice** to save the files

## Development

Clone the repo and open `index.html` in a browser. No build step required.

```sh
git clone git@github.com:adamabernathy/all-rights-reserved.git
cd all-rights-reserved
open index.html
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to `main`. To enable this, go to your repository **Settings > Pages** and set the source to **GitHub Actions**.

## Disclaimer

This tool is provided for informational purposes only and does not constitute legal advice. The generated license and notice text are generic templates and may not be suitable for your specific needs. No attorney-client relationship is created by using this tool. Consult a qualified attorney for legal guidance tailored to your situation.
