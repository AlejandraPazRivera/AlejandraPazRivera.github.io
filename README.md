# Alejandra Paz Rivera — Personal Website (GitHub Pages)

This repository contains a fast, static website you can host on GitHub Pages. No frameworks, just HTML/CSS/JS.

## Publish (2 steps)

1. Create a new repository on GitHub named **AlejandraPazRivera.github.io** (or any name if you prefer a project site).
2. Upload these files to the repository (or drag & drop the ZIP contents), then go to **Settings → Pages**:
   - If the repo is called `AlejandraPazRivera.github.io`, it will publish automatically at `https://AlejandraPazRivera.github.io`.
   - If it's any other name, choose **Deploy from a branch** and select the `main` branch and `/ (root)` folder.

> Tip: add a file named `.nojekyll` (already included) to ensure static assets serve as-is.

## Custom domain

If you buy `alejandrapazrivera.com`, you can point it to GitHub Pages.

1. In your domain registrar (where you buy the domain), set DNS records:
   - **A records** (apex/root domain) pointing to the GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - **CNAME** for `www` pointing to `AlejandraPazRivera.github.io`.
2. In GitHub, go to **Settings → Pages → Custom domain**, enter `alejandrapazrivera.com`, and save.
3. GitHub will provision HTTPS automatically; it may take a bit to propagate.

## Analytics

Open `assets/script.js` and replace `G-XXXXXXXXXX` with your **GA4 Measurement ID**. If you don’t have one yet, leave it as-is and nothing will load.

## Content

- Edit text directly in the HTML files (`index.html`, `research.html`, etc.).
- Replace the CV at `assets/cv.pdf` and the portrait at `assets/alejandra.jpg` as needed.
- Accent color can be changed in `assets/styles.css` via `--accent`.

## Notes

- The Job Market Paper is title-only right now with a short note. Update `research.html` when you’re ready to share an abstract or PDF.
- This site is intentionally lightweight and easily editable without knowing Jekyll/Markdown.
