import ResumeList from '@/components/ResumeList';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Resumes = async () => {
  const session = await getServerSession();
  if (!session) {
    return redirect('/login');
  }

  return <ResumeList />;
};

export default Resumes;
