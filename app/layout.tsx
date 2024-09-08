import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/theme_provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Football from './public/assets/images/1.svg';

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-inherit text-inherit antialiased [background:none]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen bg-background">
            <Header />
            {children}
            <Footer />
            <div className="fixed inset-0 -z-50 opacity-5">
              <Image src={Football} alt="Hero Image" fill />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
