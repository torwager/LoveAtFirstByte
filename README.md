# Love at First Byte

**AI in Academia — a hands-on workshop for pain-science researchers.**
NAPS · AI for Academia · 2026.

A [Quarto](https://quarto.org) website published to GitHub Pages. It contains a
90-minute workshop: an interactive landing page, a workshop overview, an AI
toolkit guide (free tools for beginners and power users), a facilitator guide,
and a menu of hands-on AI challenges.

🔗 **Live site:** https://torwager.github.io/LoveAtFirstByte/

## Project layout

```
.
├── index.qmd                 # Landing page (reactive neural-constellation canvas)
├── _quarto.yml               # Site config + navigation
├── theme.scss                # Design system (colors, components)
├── assets/
│   ├── js/neural-constellation.js   # Pointer-tracking landing animation
│   ├── css/extras.css        # Landing + layout extras
│   └── img/favicon.svg
├── intro/
│   ├── overview.qmd          # The Workshop — format & strategy
│   └── tools.qmd             # The AI Toolkit — free tools guide
├── facilitation/
│   └── facilitator-guide.qmd # Run-of-show for facilitators
├── challenges/
│   ├── index.qmd             # Challenge menu
│   ├── *.qmd                 # Core challenges
│   └── advanced/*.qmd        # Agentic-tool (Claude Code / Codex / Gemini CLI) track
├── planning/                 # Source notes + the build workflow used to author the site
└── .github/workflows/publish.yml   # Auto-deploy to GitHub Pages
```

## Develop locally

Install [Quarto](https://quarto.org/docs/get-started/), then:

```bash
quarto preview      # live-reloading dev server
quarto render       # build static site into _site/
```

## Deploy

Pushing to `main` triggers `.github/workflows/publish.yml`, which renders the
site and deploys it to GitHub Pages. One-time setup: in the repo settings, set
**Settings → Pages → Build and deployment → Source = GitHub Actions**.
