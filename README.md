# Cam-Hub Website

Public website for Cam-Hub, including the bilingual product overview, support information, privacy policy, and terms used by the App Store listing.

The site is static and has no build step. Traditional Chinese and English content live in `site.js`; browser language is detected automatically and can also be changed manually.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deployment

Push the site to the repository's `main` branch. The included GitHub Pages workflow deploys the repository root.
