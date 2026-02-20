(() => {
  const form = document.getElementById("license-form");
  const companyInput = document.getElementById("company");
  const yearInput = document.getElementById("year");
  const emailInput = document.getElementById("email");
  const licenseOutput = document.getElementById("license-output");
  const readmeOutput = document.getElementById("readme-output");
  const status = document.getElementById("status");
  const downloadLicenseBtn = document.getElementById("download-license");
  const downloadReadmeBtn = document.getElementById("download-readme");

  if (
    !form ||
    !companyInput ||
    !yearInput ||
    !emailInput ||
    !licenseOutput ||
    !readmeOutput ||
    !status ||
    !downloadLicenseBtn ||
    !downloadReadmeBtn
  ) {
    return;
  }

  /** @type {{license: string, readme: string}} */
  let generatedText = { license: "", readme: "" };

  const currentYear = String(new Date().getFullYear());
  if (!yearInput.value.trim()) {
    yearInput.value = currentYear;
  }

  function buildLicenseText(company, year, email) {
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

  function buildReadmeText(company, email) {
    return `## Proprietary Notice

This repository contains proprietary material owned by ${company}.

You may view the contents for informational purposes only. You may not copy, execute, modify, test, benchmark, evaluate, distribute, or use this code or any related materials without prior written permission from ${company}.

Public access to this repository does not grant permission for internal use, commercial use, research use, or evaluation use.

See the LICENSE file for full legal terms.

For licensing inquiries, contact: ${email}
`;
  }

  function setStatus(message, isError = false) {
    status.textContent = message;
    status.classList.toggle("error", isError);
  }

  function setDownloadState(isEnabled) {
    downloadLicenseBtn.disabled = !isEnabled;
    downloadReadmeBtn.disabled = !isEnabled;
  }

  async function downloadFile(filename, content) {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });

    if (window.showSaveFilePicker) {
      try {
        const handle = await window.showSaveFilePicker({
          suggestedName: filename,
          types: [
            {
              description: "Markdown file",
              accept: { "text/markdown": [".md"] },
            },
          ],
        });
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        return;
      } catch (err) {
        if (err.name === "AbortError") return;
      }
    }

    const link = document.createElement("a");
    const objectUrl = URL.createObjectURL(blob);
    link.href = objectUrl;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("Please complete the required fields with valid values.", true);
      setDownloadState(false);
      return;
    }

    const company = companyInput.value.trim();
    const email = emailInput.value.trim();
    const year = yearInput.value.trim() || currentYear;

    generatedText = {
      license: buildLicenseText(company, year, email),
      readme: buildReadmeText(company, email),
    };

    licenseOutput.textContent = generatedText.license;
    readmeOutput.textContent = generatedText.readme;
    setStatus("Preview generated. Your files are ready to download.");
    setDownloadState(true);
  });

  downloadLicenseBtn.addEventListener("click", async () => {
    if (!generatedText.license) {
      return;
    }
    await downloadFile("LICENSE.md", generatedText.license);
    setStatus("Downloaded LICENSE.md");
  });

  downloadReadmeBtn.addEventListener("click", async () => {
    if (!generatedText.readme) {
      return;
    }
    await downloadFile("README_NOTICE.md", generatedText.readme);
    setStatus("Downloaded README_NOTICE.md");
  });
})();
