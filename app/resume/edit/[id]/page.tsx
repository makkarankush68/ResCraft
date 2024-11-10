/* eslint-disable @typescript-eslint/no-unused-vars */
import NotFound from '@/app/not-found';
import ResumeBuilder from '@/components/sections/ResumeBuilder';
import dbConnect from '@/lib/dbConnect';
import { Education, Project, ResumeDataType, WorkExperience } from '@/lib/types';
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
  await dbConnect();
  const user = await UserModel.findOne({ email: session?.user?.email });
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

  res.projects = res.projects.map((project: Project & { _id: string }) => {
    const { _id, ...rest } = project;
    return rest;
  });

  res.workExperience = res.workExperience.map((work: WorkExperience & { _id: string }) => {
    const { _id, ...rest } = work;
    return rest;
  });

  res.education = res.education.map((edu: Education & { _id: string }) => {
    const { _id, ...rest } = edu;
    return rest;
  });

  return <ResumeBuilder initial={res as ResumeDataType} />;
};

export default Page;
