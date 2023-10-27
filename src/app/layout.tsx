import '@/styles/globals.css';

import { Link } from '@nextui-org/react';
import clsx from 'clsx';
import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import { NextUIProviders } from '@/providers/next-ui';
import ReactQueryProviders from '@/providers/react-query';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
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
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ReactQueryProviders>
          <NextUIProviders
            themeProps={{ attribute: 'class', defaultTheme: 'dark' }}
          >
            <div className="relative flex h-screen flex-col">
              <Navbar />

              <main className="container mx-auto h-full max-w-7xl grow px-7 py-2">
                {children}
              </main>
              <footer className="flex w-full items-center justify-center py-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://www.igrejapentecostalreformada.com.br/"
                  title="link site ipr"
                >
                  <span className="text-default-600">
                    Conheça mais sobre a{' '}
                  </span>
                  <p className="text-primary">IPR</p>
                </Link>
              </footer>
            </div>
          </NextUIProviders>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
