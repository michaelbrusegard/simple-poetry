import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const customRender = (children: React.ReactElement) =>
  render(<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>);

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
