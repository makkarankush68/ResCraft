/* eslint-disable @typescript-eslint/no-unused-vars */
import NotFound from '@/app/not-found';
import ViewResume from '@/components/ViewResume';
import dbConnect from '@/lib/dbConnect';
import { Education, Project, ResumeDataType, WorkExperience } from '@/lib/types';
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

  if (!(res as ResumeDataType).isPublic) return <NotFound />;

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

  return <ViewResume data={res as ResumeDataType} />;
};

export default Page;
