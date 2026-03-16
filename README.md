# Portfolio

This project is a Vite + React portfolio configured for GitHub Pages deployment.

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages deployment

1. Push this project to a GitHub repository.
2. In GitHub, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to the `main` branch or run the `Deploy to GitHub Pages` workflow manually.

The workflow automatically builds with:

```bash
VITE_BASE_PATH=/<repository-name>/
```

So the site will work correctly at:

```text
https://<github-username>.github.io/<repository-name>/
```
