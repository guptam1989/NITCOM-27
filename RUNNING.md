# Running and publishing NITCOM-2027

## Requirements

- Node.js 22 or newer
- npm (included with Node.js)

## Run locally

```bash
git clone https://github.com/guptam1989/NITCOM-27.git
cd NITCOM-27
npm install
npm run dev
```

Open the local URL printed by Vite, normally <http://localhost:5173/>.

## Production build

```bash
npm run build
```

## GitHub Pages build

```bash
npm run build:pages
```

The static website is written to `dist-pages/`.

## Publish with GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` automatically builds and
publishes the website whenever a commit is pushed to `main`.

In the GitHub repository, open **Settings > Pages** and set **Source** to
**GitHub Actions**. Then open the **Actions** tab and run **Deploy website to
GitHub Pages**, or push a new commit to `main`.

The published website URL is:

<https://guptam1989.github.io/NITCOM-27/>
