import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  if (!session) {
    return redirect('/login');
  }
  return (
    <div>
      <StarsBackground className="absolute -top-20 -z-10" />
      <ShootingStars className="absolute -top-20 -z-10" />
      {children}
    </div>
  );
}
