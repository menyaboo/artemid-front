import type { PropsWithChildren, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
      networkMode: 'always'
    },
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      networkMode: 'always'
    }
  }
})

const QueryProvider = ({ children }: PropsWithChildren): ReactNode => (
  <QueryClientProvider client={ queryClient }>
    { children }
  </QueryClientProvider>
)

export default QueryProvider