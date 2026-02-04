import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
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
      <body className={`${inter.variable} min-h-screen bg-gray-950 font-sans antialiased`}>
        <div className="flex min-h-screen w-full flex-col">
          <Header />
          <main className="min-w-full flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
