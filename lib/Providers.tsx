'use client';
import { SessionProvider } from 'next-auth/react';

const Providers = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) => {
  return (
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
  );
};

export default Providers;
