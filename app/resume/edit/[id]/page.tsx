import ResumeBuilder from '@/components/sections/ResumeBuilder';
import { ResumeModel } from '@/model/Resume';

const Page = async ({
  params
}: {
  params: {
    id: string;
  };
}) => {
  const res = await ResumeModel.findById(params.id);
  const resume = res.toJSON();

  return <ResumeBuilder initial={resume} />;
};

export default Page;
