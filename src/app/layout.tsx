import type { Metadata } from 'next';
import './globals.scss';
import clsx from 'clsx';
import styles from './page.module.scss';
import { inter, robotoMono } from './fonts';

import HeaderContainer from '@/components/header/container';
import FooterContainer from '@/components/footer/container';
import { StoreProvider } from '@/redux/store-provider';

export const metadata: Metadata = {
  title: 'Delivery company orders app.',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, styles.body, robotoMono.variable)}>
        <StoreProvider>
          <HeaderContainer />
          <main className={clsx(styles.main)}>{children}</main>
          <FooterContainer />
        </StoreProvider>
        <div id="modal-container" />
        <div id="popover-container" />
        <div id="dropdown-container" />
      </body>
    </html>
  );
}
