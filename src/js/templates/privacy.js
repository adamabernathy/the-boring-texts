export function buildPrivacyText(company, year, email, level) {
  const header = `# Privacy Policy

**Effective Date:** January 1, ${year}

${company} ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use our services.`;

  const footer = `## Children's Privacy

Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete that information.

## Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website and updating the effective date above. Your continued use of our services after any changes constitutes your acceptance of the updated policy.

## Contact Us

If you have questions or concerns about this Privacy Policy, please contact us at:

${company}
Email: ${email}
`;

  if (level === "minimal") {
    return `${header}

## Information We Collect

**${company} does not directly collect, store, or process any personal information from users.** Our services are designed to operate without requiring personal data.

We do not use cookies, local storage, session storage, or any other browser-based persistence mechanism to track or identify you.

We do not use analytics services, tracking pixels, fingerprinting, or any other monitoring technology.

## Third-Party Infrastructure

While we do not collect data directly, our services rely on third-party infrastructure providers (such as hosting providers, content delivery networks, and font services) that may collect standard technical information as part of their normal operations. This may include:

- IP address
- Browser type and version
- Date and time of access

This data is collected and processed by these providers under their own privacy policies and is not accessible to us. We encourage you to review the privacy policies of any third-party services we use.

We do not sell, share, or transfer any user information to third parties.

## Data Security

Because we do not collect or store personal data, there is minimal risk of data exposure from our services. However, we take reasonable measures to ensure the security and integrity of our infrastructure.

${footer}`;
  }

  if (level === "comprehensive") {
    return `${header}

## Information We Collect

We collect information through multiple channels to provide, personalize, and improve our services.

### Information You Provide Directly

- Full name, email address, phone number, and mailing address
- Account credentials (username and password)
- Payment and billing information (credit card numbers, billing addresses)
- Profile information (photos, biographical details, preferences)
- Communications you send to us (support requests, feedback, survey responses)
- Content you create, upload, or share through our services
- Job application information (resume, employment history, references)

### Information Collected Automatically

When you access or use our services, we automatically collect:

- IP address and precise geographic location (via GPS, Wi-Fi, or cell tower data when available)
- Device identifiers (advertising ID, device serial number, hardware model)
- Browser type, version, language, and configuration
- Operating system and version
- Screen resolution and display settings
- Pages viewed, features used, links clicked, and time spent on each page
- Scroll depth, mouse movements, click patterns, and interaction heatmaps
- Search queries and filter selections within our services
- Date, time, frequency, and duration of access
- Referring and exit URLs
- Network connection type and speed
- Crash reports, performance data, and error logs

### Information from Third Parties

We may receive information about you from third-party sources, including:

- Social media platforms (when you connect your account or interact with our social profiles)
- Advertising partners and data brokers (demographic and interest-based data)
- Business partners and affiliates
- Public databases and publicly available sources
- Credit reporting agencies (for identity verification or fraud prevention)

## How We Use Your Information

We use the information we collect for the following purposes:

- To provide, operate, maintain, and improve our services
- To personalize your experience and deliver tailored content and recommendations
- To process transactions, send receipts, and manage your account
- To communicate with you about products, services, promotions, and events
- To send targeted advertising based on your interests and behavior
- To conduct analytics, research, and A/B testing to improve our services
- To build user profiles for marketing segmentation and audience modeling
- To detect, prevent, and address fraud, abuse, and security issues
- To comply with legal obligations and enforce our terms of service
- To train machine learning models and improve automated decision-making

## Cookies, Tracking, and Behavioral Analytics

We use cookies, web beacons, pixel tags, local storage, and similar technologies extensively to:

- Maintain your session and remember your preferences
- Authenticate your identity and secure your account
- Collect analytics about how you use our services
- Deliver, target, and measure the effectiveness of advertising
- Track your browsing activity across our services and third-party websites
- Build behavioral profiles for personalized content delivery

We use both first-party and third-party cookies. Third-party cookies are placed by our advertising and analytics partners. You can manage cookie preferences through your browser settings, but disabling cookies may significantly affect the functionality of our services.

## Third-Party Services and Data Sharing

We share information with third parties in the following circumstances:

- **Service providers:** Hosting, analytics, payment processing, email delivery, customer support, and advertising partners
- **Advertising partners:** We share or allow collection of data for targeted advertising, including through real-time bidding and programmatic advertising platforms
- **Business transfers:** In connection with a merger, acquisition, or sale of assets
- **Legal requirements:** When required by law, regulation, legal process, or government request
- **With your consent:** When you direct us to share your information

We do not sell your personal information in the traditional sense. However, some data sharing with advertising partners may constitute a "sale" or "sharing" under certain privacy laws (such as the CCPA). You may opt out of this sharing by contacting us.

## Data Retention

We retain your information for as long as your account is active or as needed to provide services. We also retain data as necessary to comply with legal obligations, resolve disputes, enforce agreements, and for legitimate business purposes. Some data may be retained in anonymized or aggregated form indefinitely for analytics and research.

## Data Security

We implement administrative, technical, and physical safeguards to protect your information, including encryption in transit and at rest, access controls, regular security audits, and employee training. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.

## Your Rights

Depending on your jurisdiction, you may have the right to:

- Access the personal information we hold about you
- Request correction of inaccurate or incomplete information
- Request deletion of your personal information
- Object to or restrict certain processing of your information
- Request portability of your information in a machine-readable format
- Withdraw consent where processing is based on consent
- Opt out of targeted advertising and behavioral profiling
- Opt out of the "sale" or "sharing" of personal information (as defined by applicable law)
- Lodge a complaint with a data protection authority

To exercise any of these rights, please contact us at ${email}. We will respond within the timeframe required by applicable law.

## International Data Transfers

Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from your jurisdiction. We implement appropriate safeguards (such as standard contractual clauses) to ensure your information is protected.

${footer}`;
  }

  // Standard (default)
  return `${header}

## Information We Collect

### Information You Provide

We may collect information that you voluntarily provide when you use our services, including but not limited to:

- Name and contact information (email address, phone number, mailing address)
- Account credentials
- Payment and billing information
- Any other information you choose to provide

### Information Collected Automatically

When you access our services, we may automatically collect certain technical information, including:

- IP address and approximate geographic location
- Browser type, version, and language preferences
- Operating system and device information
- Pages viewed, links clicked, and other usage data
- Date and time of access
- Referring URL

## How We Use Your Information

We use the information we collect for the following purposes:

- To provide, maintain, and improve our services
- To process transactions and send related information
- To respond to your inquiries and provide customer support
- To send administrative notices, updates, and security alerts
- To detect, prevent, and address technical issues or fraudulent activity
- To comply with legal obligations

## Cookies and Tracking Technologies

We may use cookies, web beacons, and similar technologies to collect information about your browsing activity. You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of certain features.

## Third-Party Services

We may share information with third-party service providers who assist us in operating our services, such as hosting providers, analytics services, and payment processors. These providers are contractually obligated to use your information only as necessary to provide services to us and in accordance with this policy.

We do not sell your personal information to third parties.

## Data Retention

We retain your information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.

## Data Security

We implement reasonable administrative, technical, and physical safeguards to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.

## Your Rights

Depending on your jurisdiction, you may have the right to:

- Access the personal information we hold about you
- Request correction of inaccurate information
- Request deletion of your personal information
- Object to or restrict certain processing of your information
- Request portability of your information
- Withdraw consent where processing is based on consent

To exercise any of these rights, please contact us at ${email}.

${footer}`;
}
