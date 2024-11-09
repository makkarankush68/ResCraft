import NotFound from '@/app/not-found';
import ResumeBuilder from '@/components/sections/ResumeBuilder';
import dbConnect from '@/lib/dbConnect';
import { ResumeDataType } from '@/lib/types';
import { ResumeModel } from '@/model/Resume';

const Page = async ({
  params
}: {
  params: {
    id: string;
  };
}) => {
  await dbConnect();
  let res = await ResumeModel.findById(params.id).lean();
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
