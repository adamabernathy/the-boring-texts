# Claude Code Instructions

## GitHub Issues Workflow

When working on a GitHub issue:

1. **Create a branch** named `Issue-N` where `N` is the issue number before starting any work.

   ```sh
   git checkout -b Issue-N
   ```

2. **Work on the issue** on that branch.

3. **Tag the issue** at the bottom of every commit message related to the issue:

   ```sh
   Closes #N
   ```

   Example commit message:

   ```sh
   Fix license expiration validation logic

   Closes #42
   ```

## Accessibility

- All UI must meet **WCAG 2.1 AA at minimum**. The target standard is **WCAG 3.0**.
- If something meets 2.1 but not 3.0, **create a GitHub issue** describing what falls short and what needs to be done to reach 3.0 compliance.
- Accessibility is non-negotiable — it is treated as a bug, not a feature request.

## HTML & Semantic Markup

- All HTML must be **fully semantic**. Use the most appropriate element for the content (`<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<main>`, `<aside>`, `<figure>`, `<time>`, etc.).
- **Minimize `<div>` and `<span>`**. These are last-resort elements. If a semantic element fits, use it.
- **CSS-free usability is the goal.** If the stylesheet fails to load, the app must remain functional, readable, and understandable. Structure and hierarchy come from markup, not CSS.
- Screen readers and non-CSS renderings (e.g. Reader Mode, text browsers) must always produce a usable experience.

## Keyboard Shortcuts

- Add keyboard shortcuts where they simplify common tasks or workflows, when it makes sense to do so.
- **`Shift + ?` must always open a modal** listing all available shortcuts in the current context.
- Follow **Apple Human Interface Guidelines** for modifier key usage:
  - `CMD` — primary actions, app-level commands (save, open, copy)
  - `OPT/ALT` — alternate or secondary variants of a command
  - `CTRL` — lower-level or system-adjacent actions; use sparingly in web contexts
- All shortcut keys must be documented in the `Shift + ?` help modal and have appropriate `aria-label` or `aria-keyshortcuts` attributes on their associated elements.
