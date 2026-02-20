export function buildAccessibilityText(company, year, email) {
  return `# Accessibility Statement

**Last Updated:** January 1, ${year}

${company} is committed to ensuring that our digital services are accessible to all people, including individuals with disabilities. We strive to conform to the **Web Content Accessibility Guidelines (WCAG) 2.1 Level AA** standards as published by the World Wide Web Consortium (W3C).

## Our Commitment

We believe that every person deserves equal access to information and functionality. Accessibility is an ongoing effort, and we continually work to improve the usability and accessibility of our digital services for everyone.

## Accessibility Features

We have implemented the following measures to support accessibility:

### Structure and Navigation

- Semantic HTML elements (headings, landmarks, lists) for clear document structure
- Consistent and predictable navigation across all pages
- Skip navigation links to bypass repetitive content
- Descriptive page titles and heading hierarchy

### Keyboard Accessibility

- All interactive elements are operable via keyboard alone
- Visible focus indicators on all focusable elements
- Logical tab order that follows the visual layout
- No keyboard traps — users can navigate freely

### Visual Design

- Sufficient color contrast ratios meeting WCAG AA requirements (minimum 4.5:1 for normal text, 3:1 for large text)
- Content is readable and functional at up to 200% zoom
- Information is not conveyed by color alone
- Responsive design that adapts to different screen sizes and orientations

### Assistive Technology Support

- ARIA attributes where native HTML semantics are insufficient
- Form inputs with associated labels and descriptive error messages
- Status messages announced via ARIA live regions
- Meaningful alternative text for images and non-text content

### Motion and Animation

- Reduced motion support for users who prefer minimal animation (respects the \`prefers-reduced-motion\` operating system setting)
- No content that flashes more than three times per second

## Known Limitations

While we strive for full accessibility, some limitations may exist:

- Third-party content or embedded services may not fully meet accessibility standards
- Older documents (such as PDFs) may not be fully accessible
- Newly published content may temporarily lack full accessibility

We are actively working to identify and resolve any accessibility gaps.

## Conformance Status

We aim to conform to WCAG 2.1 Level AA. "Aim to conform" means that we are working toward full conformance and are committed to meeting this standard across our digital services.

## Feedback and Contact

We welcome your feedback on the accessibility of our services. If you encounter any accessibility barriers, have difficulty accessing any content, or have suggestions for improvement, please contact us:

${company}
Email: ${email}

We aim to respond to accessibility feedback within 5 business days and to resolve reported issues as quickly as possible.

## Enforcement and Complaint Procedures

If you are not satisfied with our response to your accessibility concern, you may have the right to file a complaint with your local accessibility enforcement authority or regulatory body.
`;
}
