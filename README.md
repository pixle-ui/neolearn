# NeoLearn

**A free, open-source tech tutorial library — and a hands-on portfolio project by PÏXLĒ.**

[Live Demo](https://neolearn-a09.pages.dev) · [View Source Code on GitHub](https://github.com/pixle-ui/neolearn)

## About

NeoLearn is a multi-platform library of practical, step-by-step technology tutorials. Tutorials adapt to the selected platform, helping learners follow relevant instructions on Linux, Android, macOS, Windows, and iOS.

The project is built by PÏXLĒ, a self-taught software and cybersecurity enthusiast from Nigeria. It is an example of building a useful, interactive web application with browser-native technologies and no framework or build step.

## Key Features

- **102 tutorials** across technology topics and categories.
- **Platform-aware instructions** for Linux, Android, Mac, Windows, and iOS.
- **Custom fuzzy search** using a Levenshtein-distance algorithm, abbreviation expansion, and relevance scoring.
- **Local state management** with browser LocalStorage for favorites, learning progress, and platform preferences.
- **Interactive learning tools:** tutorial search, category filters, command-copy buttons, favorites, and step-by-step progress tracking.
- **Responsive interface** using CSS Grid and Flexbox, with glassmorphism styling and motion effects.
- **AI-assisted development workflow:** AI tools support exploration, implementation, and iteration; generated suggestions are reviewed and integrated by the author.
- **Privacy-friendly by design:** no accounts required; favorites and progress are stored in the local browser.

## Technical Highlights

- Custom search engine with Levenshtein distance for typo-tolerant matching.
- Vanilla JavaScript state management and DOM-driven rendering.
- Responsive CSS Grid/Flexbox layout and glassmorphism.
- Plain HTML, CSS, and JavaScript with no framework, package manager, or build tools.

## Tech Stack

| Technology | Use |
| --- | --- |
| HTML | Semantic page structure |
| CSS | Responsive layout, design system, and animations |
| Vanilla JavaScript | Search, tutorial rendering, interactions, and LocalStorage state |
| Cloudflare Pages | Static-site hosting |

## Run Locally

No dependencies or build process are required. Clone the repository and open `index.html` in a browser, or serve the folder with any static web server.

```bash
git clone https://github.com/pixle-ui/neolearn.git
cd neolearn
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Author

**PÏXLĒ** — self-taught software and cybersecurity enthusiast.

- GitHub: [github.com/pixle-ui](https://github.com/pixle-ui)
- Email: [pixle.dev@proton.me](mailto:pixle.dev@proton.me)

## Safety

Security-related tutorials and projects are for systems and networks you own or are explicitly authorized to test, or for legal training labs. Always follow applicable laws and platform rules.

## License

MIT — free to use, modify, and share.
