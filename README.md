# BookNest Library

> A small static frontend project that showcases a curated collection of books by genre. Built with vanilla HTML, CSS and JavaScript. The app renders book lists, recommendations, and a book details page from a local data file.

**Live demo:** This repository contains a static front-end; you can run it locally using a simple static server (instructions below).

**Key features**
- Browse books by genre (Fiction, Non-Fiction, Mystery, Sci‑Fi, History, Children’s, Fantasy, Romance).
- Click a book to view details (title, author, rating, themes, about, info).
- Horizontally scrollable recommendations section that shows random books.

**Quick start (local)**
1. Open a terminal in the project folder (where `index.html` lives).
2. Start a simple static server (choose one):

```bash
# Python 3 built-in HTTP server (port 8000)
python3 -m http.server 8000

# Or, if you have Node and `http-server` installed:
# npx http-server -p 8000
```

3. In your browser go to `http://localhost:8000/index.html`.

Tip: If you use VS Code, the Live Server extension will also work for development.

**Project structure (important files)**
- `index.html` — main page that displays genres, books, and recommendations.
- `bookDetails.html` — details page for a single book (reads `?id=` query param).
- `script.js` — main client-side logic (renders lists, handles category toggle, generates recommendations).
- `data.js` / `dataV1.js` — book data arrays used by the app. These files include image paths and book metadata.
- `bookcovers/` — cover images organized by genre.
- `*.css` — styles (`style.css`, `nav.css`, `booksContainer.css`, `bookDetails.css`, `footer.css`).

**Notes & known issues**
- Navigation links: the app code currently constructs links like `./bookDetails?id=...`. The actual file is `bookDetails.html`. If navigation fails, update JS to use `./bookDetails.html?id=...`.
- ID vs index mismatch: recommendation links may pass the array index (0-based) while `bookDetails.html` expects a numeric `id` and uses `bookDatas[id - 1]`. Ensure the same id convention is used consistently.
- Image paths: `data.js` contains absolute-style paths (`/BookNestLibrary/...`) while `dataV1.js` uses relative paths (`./bookcovers/...`). Prefer using relative paths so the site works when hosted under different base URLs.
- `getRandomIndexs()` should guard when requested `count` is greater than available books — otherwise it may loop. A fix: use `count = Math.min(count, max)` and return early for `max === 0`.
- Accessibility: add `alt` attributes on images and ARIA attributes to interactive controls (category toggle, close button). Ensure keyboard navigation is possible for the slide-out categories panel.

**Improvements and suggestions**
- Add `loading="lazy"` to images to improve perceived load performance.
- Use `DocumentFragment` when appending many DOM nodes in a loop to reduce reflows.
- Add basic unit tests or a small end-to-end smoke test (e.g., Puppeteer) to verify critical navigation.
- Consider moving data to a JSON file and fetching it via `fetch()` (or expose a small API) to separate data from application code.

**Contributing**
Feel free to open issues or pull requests. When submitting changes, include a brief description and testing steps.

**License**
This repository does not include a license file. Add a license (for example, MIT) if you want others to reuse this code freely.

