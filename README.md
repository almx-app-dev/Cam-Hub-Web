# Cam-Hub Website

Public website for Cam-Hub, including the localized product overview, support information, privacy policy, and terms used by the App Store listing.

The site is static and has no build step. Browser language is detected automatically, unsupported languages fall back to English, and visitors can also change the language manually.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deployment

Push the site to the repository's `main` branch. The included GitHub Pages workflow deploys the repository root, including the `.well-known` directory required for Universal Links.
