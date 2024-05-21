import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import HeaderContainer from '@/components/header/container';
import FooterContainer from '@/components/footer/container';
import { StoreProvider } from '@/redux/store-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Transfer company orders app',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <HeaderContainer />
          <main>{children}</main>
          <FooterContainer />
        </StoreProvider>
      </body>
    </html>
  );
}
