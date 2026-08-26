# Product Catalog

A small, responsive product catalog built with React, React Router, and the
[Fake Store API](https://fakestoreapi.com).

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Features

- Product list page (`/`) with a responsive grid, search, and category filter
- Product detail page (`/products/:id`)
- Loading and error states for both pages, with a retry option
- Not found page for unknown routes
- Fully responsive: 4 columns on desktop, 2 on tablet, 1 on mobile

## Project structure

```
src/
├── components/
│   ├── Header/
│   ├── ProductCard/
│   ├── Loader/
│   └── ErrorMessage/
├── pages/
│   ├── ProductList/
│   ├── ProductDetail/
│   └── NotFound/
├── services/
│   └── productService.js
├── App.jsx
├── main.jsx
└── index.css
```
