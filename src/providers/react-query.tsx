'use client';

import { queryClient } from '@services/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import React from 'react';

/**
 * The `ReactQueryProviders` component is a wrapper that provides the necessary
 * context and tools for using React Query in a TypeScript React application.
 * @param  - The `React.PropsWithChildren` type is a utility type provided by React
 * that allows you to define the props of a component that include children. It is
 * used to ensure that the component can accept any props that are passed to it,
 * along with any children components.
 * @returns a JSX element.
 */
const ReactQueryProviders = ({ children }: React.PropsWithChildren) => {
  const [client] = React.useState(queryClient);

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQueryProviders;
