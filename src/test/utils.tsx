import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const customRender = (children: React.ReactElement) =>
  render(
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
  )

export { customRender as render }
