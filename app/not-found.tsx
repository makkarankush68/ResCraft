import Image from 'next/image';
import React from 'react';

const NotFound = () => {
  return (
    <div className="absolute inset-0 flex h-full flex-1 flex-col items-center justify-center gap-4">
      <h1 className="mt-10 text-center text-4xl font-semibold">404 - Page Not Found</h1>
      <Image src="/images/cook.gif" alt="404" className="w-40" width={500} height={500} />
      <p className="mt-4 text-center">chefs are cooking here .. </p>
    </div>
  );
};

export default NotFound;
