'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="absolute inset-0 flex h-full flex-1 flex-col items-center justify-center gap-4">
        <h1 className="mt-10 text-center text-4xl font-semibold">cooking..</h1>
        <Image src="/images/cook.gif" alt="404" className="w-40" width={500} height={500} />
        <p className="mt-4 text-center">chefs are cooking here</p>
      </div>
      {/* <iframe
        src="https://74eb-152-58-107-107.ngrok-free.app"
        className="-mt-20 h-screen w-screen"
      /> */}
      {/* <iframe
        src="https://1bkw8htr-8501.inc1.devtunnels.ms/"
        className="-mt-20 h-screen w-screen"
      /> */}
    </>
  );
};

export default Page;
