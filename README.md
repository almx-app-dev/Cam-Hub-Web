# Cam Hub Website

Public website for Cam Hub, including the localized product overview, support information, privacy policy, and terms used by the App Store listing.

The site is static and has no build step. Browser language is detected automatically, unsupported languages fall back to English, and visitors can also change the language manually.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deployment

Push the site to the repository's `main` branch. The included GitHub Pages workflow deploys the repository root, including the `.well-known` directory required for Universal Links.

## Website statistics

Page views are counted with Cloudflare Web Analytics (cookie-free). The site token is `shared.cloudflareToken` at the top of `site.js`; an empty token turns statistics and the privacy-page notice off. The script is added by `loadWebAnalytics()` and is skipped on localhost, and for visitors whose browser sends Do Not Track or Global Privacy Control. The invite page (`i/index.html`) is deliberately left out: the transfer code travels in its URL fragment. The notice on the privacy page (`siteNoticeTitle` / `siteNoticeBody`, nine languages) is rendered by `site.js` and is not part of the legal text the app bundles.

## App Store links

Every page links to the App Store (header pill, footer, and on the home page the hero and the closing call to action) and has a Smart App Banner (`apple-itunes-app`). Each link carries the account's provider token and a campaign token named after the page: `?pt=129040647&ct=web-<page>&mt=8` (`web-home`, `web-product`, `web-guide`, `web-support`, `web-privacy`, `web-terms`, `web-invite`). App Store Connect shows the downloads per campaign under Analytics > Campaigns after a day or two. Labels are `storeCTA` and `storeShort` in `site.js` and `additional-locales.js`. The header pill is hidden between 1021 and 1140 px wide, where German and French do not have room for it.
