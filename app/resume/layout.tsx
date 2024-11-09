import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <StarsBackground className="absolute -top-20 -z-10" />
      <ShootingStars className="absolute -top-20 -z-10" />
      {children}
    </div>
  );
}
