import NotFound from '@/app/not-found';
import ResumeBuilder from '@/components/sections/ResumeBuilder';
import dbConnect from '@/lib/dbConnect';
import { ResumeDataType } from '@/lib/types';
import { ResumeModel } from '@/model/Resume';
import { UserModel } from '@/model/User';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Page = async ({
  params
}: {
  params: {
    id: string;
  };
}) => {
  const session = await getServerSession();
  if (!session) {
    return redirect('/login');
  }
  await dbConnect();
  const user = await UserModel.findOne({ email: session.user?.email });
  let res = await ResumeModel.findOne({ _id: params.id, userId: user._id }).lean();

  if (!res) {
    return <NotFound />;
  }

  if (res)
    res = {
      ...res,
      _id: (res as ResumeDataType)._id.toString(),
      userId: (res as ResumeDataType).userId.toString()
    };

  res.projects = res.projects.map((project: any) => {
    const { _id, ...rest } = project;
    return rest;
  });

  res.workExperience = res.workExperience.map((work: any) => {
    const { _id, ...rest } = work;
    return rest;
  });

  res.education = res.education.map((edu: any) => {
    const { _id, ...rest } = edu;
    return rest;
  });


  return <ResumeBuilder initial={res as ResumeDataType} />;
};

export default Page;
