import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const websiteRoot = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.dirname(websiteRoot);
const appLegalRoot = path.join(repositoryRoot, "Cam-Hub", "Resources", "Legal");
const webLegalRoot = path.join(websiteRoot, "legal");
const localeOrder = ["en", "zh-Hant", "zh-Hans", "ja", "ko", "de", "es", "fr", "ar"];

// Evaluate only the translation declarations. site.js also contains browser UI
// code, so stop before it merges translations and starts rendering the page.
vm.runInThisContext(fs.readFileSync(path.join(websiteRoot, "additional-locales.js"), "utf8"));
const siteSource = fs.readFileSync(path.join(websiteRoot, "site.js"), "utf8");
const declarations = siteSource
  .slice(0, siteSource.indexOf("Object.assign(translations"))
  .replace("const translations =", "globalThis.__camHubCoreTranslations =");
vm.runInThisContext(declarations);

const translations = {
  ...globalThis.__camHubCoreTranslations,
  ...(globalThis.CamHubAdditionalTranslations || {})
};

function plain(value) {
  return String(value)
    .replace(/<[^>]+>/g, "")
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", "\"")
    .replaceAll("&#39;", "'")
    .trim();
}

function renderDocument(locale, key, fallbackHeading) {
  const document = translations[locale]?.[key];
  if (!document) throw new Error(`Missing ${key} translation for ${locale}`);

  const lines = [
    fallbackHeading,
    plain(document.title),
    "",
    plain(document.summary),
    ""
  ];
  for (const [label, value] of document.meta) {
    lines.push(`${plain(label)}: ${plain(value)}`);
  }
  for (const [title, paragraphs] of document.sections) {
    lines.push("", plain(title), "");
    for (const paragraph of paragraphs) lines.push(plain(paragraph), "");
  }
  return `${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

fs.mkdirSync(appLegalRoot, { recursive: true });
fs.mkdirSync(webLegalRoot, { recursive: true });

for (const locale of localeOrder) {
  for (const [key, fallbackHeading] of [["privacy", "PRIVACY POLICY"], ["terms", "TERMS OF USE"]]) {
    const text = renderDocument(locale, key, fallbackHeading);
    fs.writeFileSync(path.join(appLegalRoot, `${key}-${locale}.txt`), text);
    fs.writeFileSync(path.join(webLegalRoot, `${key}-${locale}.txt`), text);
  }
}

// Keep the legacy bundle names as English fallbacks for existing builds and
// for any unsupported system locale.
fs.writeFileSync(path.join(appLegalRoot, "privacy.txt"), renderDocument("en", "privacy", "PRIVACY POLICY"));
fs.writeFileSync(path.join(appLegalRoot, "terms.txt"), renderDocument("en", "terms", "TERMS OF USE"));
