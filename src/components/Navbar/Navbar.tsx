/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import {
  Link,
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { link as linkStyles } from '@nextui-org/theme';
import clsx from 'clsx';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';

import { siteConfig } from '@/config/site';

import { ThemeSwitch } from '../ThemeSwitch';

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-1">
          <NextLink className="flex items-center justify-start gap-2" href="/">
            <Image
              src="/images/biblia.png"
              alt="Em breve"
              width={28}
              height={28}
            />
            <div className="flex flex-col items-start justify-center">
              <span className="text-xs font-bold  italic text-primary dark:text-white">
                Bíblia
              </span>
              <span className="text-xs font-semibold italic text-primary dark:text-white">
                online
              </span>
            </div>
          </NextLink>
        </NavbarBrand>
        <ul className="ml-2 hidden justify-start gap-2 sm:flex">
          {siteConfig.navItems.map(item => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:font-medium data-[active=true]:text-primary'
                )}
                color="foreground"
                href={item.href}>
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden basis-1/5 sm:flex sm:basis-full"
        justify="end">
        <NavbarItem className="hidden gap-2 sm:flex">
          <ThemeSwitch />
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
      </NavbarContent>

      <NavbarContent className="basis-1 pl-1 sm:hidden" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {React.Children.toArray(
            siteConfig.navMenuItems.map(item => (
              <NavbarMenuItem>
                <Link color={'primary'} href={item.href} size="lg">
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))
          )}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
