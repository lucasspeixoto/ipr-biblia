import '@/styles/globals.css';

import clsx from 'clsx';
import type { Metadata } from 'next';

import { Navbar } from '@/components/Navbar';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import { NextUIProviders } from '@/providers/NextUIProviders';
import ReactQueryProviders from '@/providers/ReactQueryProviders';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen overflow-auto bg-background font-sans antialiased scrollbar-hide',
          fontSans.variable
        )}>
        <ReactQueryProviders>
          <NextUIProviders
            themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
            <div className="relative flex flex-col">
              <Navbar />

              <main className="container mx-auto h-screen max-w-7xl grow p-1">
                {children}
              </main>
            </div>
          </NextUIProviders>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
