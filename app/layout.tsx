import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/lib/Providers';

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
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem
          disableTransitionOnChange
          enableColorScheme={true}
        >
          <main className="min-h-screen bg-background pt-navHeight font-sans">
            <Providers>
              <Header />
              {children}
              <Footer />
            </Providers>
            <div className="fixed inset-0 top-0 -z-10 bg-gradient-to-b from-transparent to-slate-500 dark:from-slate-800 dark:to-transparent"></div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
