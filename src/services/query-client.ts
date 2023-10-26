import { QueryClient } from '@tanstack/query-core';

export const queryClient = new QueryClient({
  /*  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 30,
    },
  }, */
});

// const getQueryClient = cache(() => new QueryClient());
