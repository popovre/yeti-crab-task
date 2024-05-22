import { Inter, Roboto_Mono } from 'next/font/google';

export const inter = Inter({
  subsets: ['cyrillic', 'cyrillic-ext', 'latin'],
  display: 'swap',
  style: ['normal'],
  preload: true,
  variable: '--font-inter',
});

export const robotoMono = Roboto_Mono({
  subsets: ['cyrillic', 'cyrillic-ext', 'latin'],
  display: 'swap',
  style: ['normal'],
  preload: true,
  variable: '--font-robotoMono',
});
