import ResumeBuilder from '@/components/sections/ResumeBuilder';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect('/login');
  }
  return <ResumeBuilder />;
};

export default Page;
