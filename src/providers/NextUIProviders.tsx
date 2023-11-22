'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import * as React from 'react';

/* The `export interface ProvidersProps` is defining a TypeScript interface called
`ProvidersProps`. This interface specifies the expected shape of the props
object that should be passed to the `NextUIProviders` component. */
export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

/**
 * The NextUIProviders function is a React component that wraps its children with
 * NextUIProvider and NextThemesProvider components, passing themeProps as props to
 * NextThemesProvider.
 * @param {ProvidersProps}  - - `children`: The child components that will be
 * wrapped by the providers.
 * @returns a JSX element.
 */
export function NextUIProviders({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
