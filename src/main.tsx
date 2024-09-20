import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import HomePage from './pages/home'
import PoemPage from './pages/poem'
import FavoritesPage from './pages/favorites'
import NotFoundPage from './pages/not-found'
import ErrorPage from './pages/error'

const BASE_PATH = '/project1'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: `${BASE_PATH}/`,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${BASE_PATH}/poem/:poem`,
    element: <PoemPage />,
  },
  {
    path: `${BASE_PATH}/favorites`,
    element: <FavoritesPage />,
  },
  {
    path: `${BASE_PATH}/*`,
    element: <NotFoundPage />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
