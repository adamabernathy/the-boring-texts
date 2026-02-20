export function buildLicenseText(company, year, email) {
  return `# All Rights Reserved License

Copyright © ${year} ${company}. All rights reserved.

This repository and its contents, including but not limited to source code, documentation, designs, assets, and configuration files, are the exclusive property of ${company}.

No part of this repository may be copied, modified, distributed, published, sublicensed, sold, reverse engineered, decompiled, disassembled, executed, tested, benchmarked, evaluated, or used in any form or by any means without the prior written permission of ${company}.

## No License Granted

Permission is granted solely to access and view this repository for informational purposes. No license, express or implied, is granted to use, reproduce, execute, modify, distribute, create derivative works from, benchmark, evaluate, test, or otherwise exploit any portion of the materials contained in this repository.

Public availability of this repository does not grant permission for internal use, commercial use, non-commercial use, research use, or evaluation use.

## Disclaimer of Warranties

THE SOFTWARE AND ALL RELATED MATERIALS ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND.

## Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ${company} SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE USE OF OR INABILITY TO USE THE SOFTWARE OR ANY MATERIALS IN THIS REPOSITORY.

## No Obligation

${company} has no obligation to provide maintenance, support, updates, or modifications.

For licensing inquiries, contact: ${email}
`;
}
