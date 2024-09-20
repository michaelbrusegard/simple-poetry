# PoetryDB Web App

This project obtains poems from the [PoetryDB API](https://poetrydb.org/index.html) and presents it in a user chosen view (grid or carousel).

## How to run

Make sure you have Node.js 22.5+ and npm 10.8+ installed.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Requirements checklist

**Functional Requirements**

- [x] The user is presented with one and one resource in a list
  - We got confused on this requirement at the start so we implemented both a grid view and a simple carousel view
- [x] User filtering/sorting options that persist on page reload
  - Filter by search term or author. Stored in session storage.
- [x] User ability to select favorites that persist across sessions
  - Stored in local storage, favorites show up on the favorites page when favorited inside the poem page.
- [x] Responsive design for both desktop and mobile devices
- [x] Aesthetically pleasing and organized page layout
  - We avoid flashy colors and keep the design simple and clean. No animations because it is much work for little gain when we cannot use libraries.

**Technical Requirements**

- [x] Good use of HTML for accessibility
  - Using native HTML elements, so no need for ARIA attributes.
- [x] Solution based on TypeScript and React
- [x] Use of React state and props
- [x] Data retrieval from a REST API using TanStack Query
- [x] Use of HTML Web storage API (localstorage and sessionstorage) or IndexedDB API

**Development and Testing**

- [x] Use of Node.js v22.5+ and npm v10.8+
- [x] React project setup with the latest version of Vite
- [x] Use of git with code on git.ntnu.no
- [x] Use of branching and issues for task management
- [x] Use of linting and prettier (ESlint and prettier)
  - Using the prettier config plugin to avoid conflicts between prettier and eslint.
- [x] Setup and start testing with Vitest
- [x] Snapshot testing
  - `FavoriteGrid.test.tsx`,`PoemCarousel.test.tsx`, `Poem.test.tsx` components and the pages `Favorites.test.tsx` and `Home.test.tsx` are snapshot tested.
- [x] Testing of components (prop and state, user interaction)
  - `Home.test.tsx` and `PoemCarousel.test.tsx` test user interaction with the author select and the carousel.
- [x] Use of mocking to prevent data fetching during tests
  - Most of the tests rely on mocked data (with the exception favorites and session storage), all mocked API calls are in `stc/test/setup.ts` and the mocked data is in `src/test/mock.ts`
- [x] Application tested on mainstream web browsers and mobile devices
- [x] Documentation in the form of a readme that explains choices and what has been tested
