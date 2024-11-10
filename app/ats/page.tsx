'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Page = () => {
  const [isRescraft, setIsRescraft] = useState(false);

  useEffect(() => {
    setIsRescraft(window && window.location.hostname === 'rescraft.makkar.live');
  }, []);

  return (
    <>
      {isRescraft ? (
        <div className="absolute inset-0 flex h-full flex-1 flex-col items-center justify-center gap-4">
          <h1 className="mt-10 text-center text-4xl font-semibold">cooking..</h1>
          <Image src="/images/cook.gif" alt="404" className="w-40" width={500} height={500} />
          <p className="mt-4 text-center">chefs are cooking here</p>
        </div>
      ) : (
        <iframe src="http://localhost:8501" className="-mt-20 h-screen w-screen" />
      )}
    </>
  );
};

export default Page;
