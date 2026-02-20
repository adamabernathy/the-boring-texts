export function buildReadmeText(company, email) {
  return `## Proprietary Notice

This repository contains proprietary material owned by ${company}.

You may view the contents for informational purposes only. You may not copy, execute, modify, test, benchmark, evaluate, distribute, or use this code or any related materials without prior written permission from ${company}.

Public access to this repository does not grant permission for internal use, commercial use, research use, or evaluation use.

See the LICENSE file for full legal terms.

For licensing inquiries, contact: ${email}
`;
}
