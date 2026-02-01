import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NuvemShop - Sua Loja Tech',
  description: 'Loja online de produtos tech para desenvolvedores',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gray-950 antialiased`}
      >
        <div className="flex min-h-screen w-full flex-col">
          <Header />
          <main className="min-w-full flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
