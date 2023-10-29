import { QueryClient } from '@tanstack/query-core';

/* The code is creating a new instance of the `QueryClient` class and assigning it
to the `queryClient` constant. The `QueryClient` is a class provided by the
`@tanstack/query-core` library. */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 30,
    },
  },
});
