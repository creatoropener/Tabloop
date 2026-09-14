# Tabloop Website

A lightweight privacy-first static website for Tabloop.

## Files

- `index.html` — main company website
- `styles.css` — complete responsive styling
- `script.js` — mobile navigation + reveal animations + current year
- `privacy.html` — production privacy policy for the Tabloop company website
- `terms.html` — production website terms of use
- `thank-you.html` — branded confirmation page the contact form redirects to on submit
- `assets/favicon.svg` — Tabloop mark / favicon
- `assets/og-image.png` — 1200x630 social share image (Open Graph / Twitter card)
- `netlify.toml` — basic Netlify hosting + security headers

## Deploy on Netlify

1. Create a new Netlify site.
2. Drag this folder into Netlify Drop, or connect it to a Git repository.
3. The included contact form uses Netlify Forms and will work after a production deploy; on submit it redirects to `thank-you.html`.
4. Point your custom Tabloop domain to Netlify when ready.
5. Current SEO URLs use `https://tabloop.netlify.app/`. Replace them with the final custom domain when connected.

## Before launch

- Replace the Xpendbox "Coming soon" state when its public URL is ready.
- Confirm the final Tabloop legal business/contact details.
- Review the Privacy Policy and Terms of Use before publishing.
- Add final analytics only if needed, preferably privacy-respecting.
- Replace the provisional logo mark if you later finalize a dedicated Tabloop identity.

## Brand foundation

Tagline:
Useful software. Thoughtfully built.

Vision:
To make useful software simpler, more accessible, and more private by design.

Mission:
To build simple, reliable, privacy-first digital products that solve real everyday problems.

Core promise:
Solve the problem. Keep it simple. Respect the user's data.


## SEO baseline

- Canonical URL currently uses `https://tabloop.netlify.app/`.
- Update canonical, Open Graph URLs, structured data, robots.txt and sitemap.xml when a custom domain is connected.
- Homepage includes Organization, WebSite and WebPage JSON-LD.
- Legal pages are indexable; thank-you page is noindex.
