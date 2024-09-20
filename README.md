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

## Showcase

## Documentation and choices

- Every component/page is tested directly or indirectly though it's children. The only thing we have not setup testing for is routing, but we are testing the individual links so it should be covered still.
  - We chose to wrap the render component from `@testing-library/react` in a custom render function to avoid having to import the providers for routing and queryClient in every test file. This is also why we are not testing routing directly. See `src/test/utils.tsx` for the custom render function.
  - More info for the individual test files are in the comment in the checklist below.
- We started with creating our own small and simple UI library in `src/components/ui`. This took a lot of time which was worth it because we reused them everywhere.
- We setup custom loading indicators in form of a skeleton and a spinner that we use with `Suspense` and `isLoading` with `@tanstack/react-query`, we also have error messages for when the API call fails or nothing is found.
- Because we first misunderstood the first requirement (we thought they meant we should display a list as a grid view) we implemented both a grid view and a carousel view for the poems. The carousel view should cover the one and one resource at a time requirement.
- Made a shared `PoemProps` type in `src/types.ts` to avoid having to write the same type multiple times. Rest APIs are not type safe.
- We setup GitHub actions for continuous integration to run the linter, formatter and tests on every push and pull request. This did not work until we hosted our own runner on the VM, because NTNU does not host runners, this is also why they all failed running prior to this.
  - Deployment is also setup to run on every push to the main branch, which helps a lot when we find bugs later on and know that the latest version always gets deployed.
- Setup routing with a home page and a favorites page, and the poems behind /poem/:author;title see `src/main.tsx`. Had to put everything behind the base path `/project1` which was annoying.

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
  - We use local storage and session storage.

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
