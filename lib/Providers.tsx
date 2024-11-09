'use client';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SessionProvider } from 'next-auth/react';

const Providers = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem
      disableTransitionOnChange
      enableColorScheme={true}
    >
      <SessionProvider
        session={
          props.session as {
            user: { name: string; email: string; image: string };
            expires: string;
            accessToken: string;
            refreshToken: string;
          } | null
        }
      >
        {children}
      </SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
