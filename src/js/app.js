import { buildLicenseText } from "./templates/license.js";
import { buildReadmeText } from "./templates/readme.js";
import { buildPrivacyText } from "./templates/privacy.js";
import { buildAccessibilityText } from "./templates/accessibility.js";
import { revokeUrls, createBlobUrl, downloadAllZip } from "./download.js";

const form = document.getElementById("license-form");
const formSection = form?.closest("section");
const companyInput = document.getElementById("company");
const yearInput = document.getElementById("year");
const emailInput = document.getElementById("email");
const outputArea = document.getElementById("output-area");
const privacyLevelToggle = document.getElementById("privacy-level-toggle");
const licenseOutput = document.getElementById("license-output");
const readmeOutput = document.getElementById("readme-output");
const privacyOutput = document.getElementById("privacy-output");
const accessibilityOutput = document.getElementById("accessibility-output");
const status = document.getElementById("status");
const downloadLicenseLink = document.getElementById("download-license");
const downloadReadmeLink = document.getElementById("download-readme");
const downloadPrivacyLink = document.getElementById("download-privacy");
const downloadAccessibilityLink = document.getElementById("download-accessibility");
const createAnotherTop = document.getElementById("create-another-top");
const createAnotherBottom = document.getElementById("create-another-bottom");
const downloadAllTop = document.getElementById("download-all-top");
const downloadAllBottom = document.getElementById("download-all-bottom");

if (
  !form ||
  !formSection ||
  !companyInput ||
  !yearInput ||
  !emailInput ||
  !privacyLevelToggle ||
  !outputArea ||
  !licenseOutput ||
  !readmeOutput ||
  !privacyOutput ||
  !accessibilityOutput ||
  !status ||
  !downloadLicenseLink ||
  !downloadReadmeLink ||
  !downloadPrivacyLink ||
  !downloadAccessibilityLink ||
  !createAnotherTop ||
  !createAnotherBottom ||
  !downloadAllTop ||
  !downloadAllBottom
) {
  throw new Error("Required DOM elements not found");
}

const currentYear = String(new Date().getFullYear());
if (!yearInput.value.trim()) {
  yearInput.value = currentYear;
}

let lastCompany = "";
let lastYear = "";
let lastEmail = "";

function showForm() {
  formSection.classList.remove("hidden");
  outputArea.classList.add("hidden");
  revokeUrls();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showOutput() {
  formSection.classList.add("hidden");
  outputArea.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getActivePrivacyLevel() {
  const activeBtn = privacyLevelToggle.querySelector('[aria-checked="true"]');
  return activeBtn ? activeBtn.dataset.level : "standard";
}

function getOutputFiles() {
  return {
    "LICENSE.md": licenseOutput.textContent,
    "README_NOTICE.md": readmeOutput.textContent,
    "PRIVACY_POLICY.md": privacyOutput.textContent,
    "ACCESSIBILITY.md": accessibilityOutput.textContent,
  };
}

// --- Form submit ---

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    status.textContent = "Please complete the required fields with valid values.";
    status.classList.add("error");
    return;
  }

  const company = companyInput.value.trim();
  const email = emailInput.value.trim();
  const year = yearInput.value.trim() || currentYear;
  const privacyLevel = getActivePrivacyLevel();

  lastCompany = company;
  lastYear = year;
  lastEmail = email;

  const texts = {
    license: buildLicenseText(company, year, email),
    readme: buildReadmeText(company, email),
    privacy: buildPrivacyText(company, year, email, privacyLevel),
    accessibility: buildAccessibilityText(company, year, email),
  };

  revokeUrls();

  licenseOutput.textContent = texts.license;
  readmeOutput.textContent = texts.readme;
  privacyOutput.textContent = texts.privacy;
  accessibilityOutput.textContent = texts.accessibility;

  downloadLicenseLink.href = createBlobUrl(texts.license);
  downloadReadmeLink.href = createBlobUrl(texts.readme);
  downloadPrivacyLink.href = createBlobUrl(texts.privacy);
  downloadAccessibilityLink.href = createBlobUrl(texts.accessibility);

  showOutput();
});

// --- Create another ---

createAnotherTop.addEventListener("click", showForm);
createAnotherBottom.addEventListener("click", showForm);

// --- Download all ---

downloadAllTop.addEventListener("click", () => downloadAllZip(getOutputFiles()));
downloadAllBottom.addEventListener("click", () => downloadAllZip(getOutputFiles()));

// --- Privacy level toggle ---

privacyLevelToggle.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-level]");
  if (!btn || btn.classList.contains("active")) return;

  for (const b of privacyLevelToggle.querySelectorAll("button")) {
    b.classList.remove("active");
    b.setAttribute("aria-checked", "false");
  }
  btn.classList.add("active");
  btn.setAttribute("aria-checked", "true");

  if (!lastCompany) return;
  const text = buildPrivacyText(lastCompany, lastYear, lastEmail, btn.dataset.level);
  privacyOutput.textContent = text;

  const oldUrl = downloadPrivacyLink.href;
  if (oldUrl.startsWith("blob:")) {
    URL.revokeObjectURL(oldUrl);
  }
  downloadPrivacyLink.href = createBlobUrl(text);
});
