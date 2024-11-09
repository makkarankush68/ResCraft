import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/lib/Providers';
import { Toaster } from '@/components/ui/toaster';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const metadata: Metadata = {
  title: 'Resume Builder',
  description: 'Build with 💖 by ANKUSH MAKKAR'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <main className="bg-background pt-navHeight font-sans">
            <Header />
            <div className="min-h-[calc(100vh_-_100px)]">{children}</div>
            <Footer />
            <div className="fixed inset-0 top-0 -z-10 bg-gradient-to-b from-transparent to-slate-500 dark:from-slate-800 dark:to-transparent"></div>
          </main>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
