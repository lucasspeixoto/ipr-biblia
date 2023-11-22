'use client';

import { MoonFilledIcon, SunFilledIcon } from '@components/icons';
import { useSwitch } from '@nextui-org/react';
import type { SwitchProps } from '@nextui-org/switch';
import { useIsSSR } from '@react-aria/ssr';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import clsx from 'clsx';
import { useTheme } from 'next-themes';

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps['classNames'];
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();

  const isSSR = useIsSSR();

  const onChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === 'light',
    'aria-label': `Mudar para modo ${theme === 'light' ? 'dark' : 'light'}`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          'cursor-pointer px-px transition-opacity hover:opacity-80',
          className,
          classNames?.base
        ),
      })}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              'h-auto w-auto',
              'bg-transparent',
              'rounded-lg',
              'flex items-center justify-center',
              'group-data-[selected=true]:bg-transparent',
              '!text-default-500',
              'pt-px',
              'px-0',
              'mx-0',
            ],
            classNames?.wrapper
          ),
        })}>
        {!isSelected || isSSR ? (
          <SunFilledIcon
            size={22}
            className="text-yellow-500 dark:text-yellow-300"
          />
        ) : (
          <MoonFilledIcon
            size={22}
            className="text-blue-500 dark:text-blue-300"
          />
        )}
      </div>
    </Component>
  );
};
