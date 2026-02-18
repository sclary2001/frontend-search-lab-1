# frontend-search-lab
web development lab to learn how to search/filter front end array &amp; object content. 

# Search Lab (Front-End, Vanilla JS)

A minimal, no-framework lab to demonstrate **client-side search** in JavaScript.

This lab intentionally uses:
- **Tiny dataset**
- **One input**
- **One render function**
- **Two search strategies**
  1) **Controlled search** (recommended): search only specific keys
  2) **Global search** (compare): search across all values

---

## Learning Goals

By the end, you should be able to:

- Filter an array based on a user’s search query
- Explain the difference between searching:
  - an **array of strings**
  - an **array of objects**
- Implement:
  - **controlled search** using a list of allowed keys
  - **global search** using `Object.values()`
- Explain what these JS functions/methods do:
  - `filter()`, `includes()`, `some()`, `Object.values()`
  - `String()`, `toLowerCase()`, `trim()`

---

## Repo Files

- `index.html` — the page with the input + results area
- `data.js` — the data you search
- `app.js` — the search + render logic

---

## Part 0 — Warm-up: Search an Array of Strings

Before searching objects, start simple.

### Example data (strings)
```js
const NAMES = ["alpha", "bravo", "charlie", "delta"];
