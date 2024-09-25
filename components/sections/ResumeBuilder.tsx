'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ResumeData } from '@/lib/types';
import PersonalInfoForm from '../PersonalInfoForm';
import ProjectsForm from '../ProjectsForm';
import WorkExperienceForm from '../WorkExperienceForm';
import EducationForm from '../EducationForm';
import SkillsForm from '../SkillsForm';
import ResumeSummary from '../ResumeSummary';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import ResumePreview from '../ResumePreview';
import { Download } from 'lucide-react';
import { StarsBackground } from '../ui/stars-background';
import { ShootingStars } from '../ui/shooting-stars';

const initialResumeData: ResumeData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    twitter: '',
    portfolio: '',
    location: '',
    summary: ''
  },
  projects: [{ name: '', description: [], techUsed: [], date: '' }],
  workExperience: [
    {
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      description: []
    }
  ],
  education: [{ institution: '', degree: '', startYear: '', endYear: '', marks: '' }],
  skills: { technical: [], soft: [], tools: [], other: [] }
};

const ResumeBuilderTabs: { [key: number]: string } = {
  1: 'Personal Info',
  2: 'Projects',
  3: 'Work Experience',
  4: 'Education',
  5: 'Skills',
  6: 'Summary'
};

export default function ResumeBuilder() {
  const [step, setStep] = useState(1);
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [previewData, setPreviewData] = useState<ResumeData>(initialResumeData);

  const [showPDFToolbar, setShowPDFToolbar] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const updateResumeData = (field: keyof ResumeData, value: ResumeData[keyof ResumeData]) => {
    setResumeData((prev) => ({ ...prev, [field]: value }));
    if (timer) {
      clearTimeout(timer);
    }
    const t = setTimeout(() => {
      setPreviewData((prev) => ({ ...prev, [field]: value }));
    }, 1000);
    setTimer(t);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && step < 6) {
        setStep((prevStep) => prevStep + 1);
      } else if (event.key === 'ArrowLeft' && step > 1) {
        setStep((prevStep) => prevStep - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [step]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfoForm
            data={resumeData.personalInfo}
            updateData={(value) => updateResumeData('personalInfo', value)}
          />
        );
      case 2:
        return (
          <ProjectsForm
            data={resumeData.projects}
            updateData={(value) => updateResumeData('projects', value)}
          />
        );
      case 3:
        return (
          <WorkExperienceForm
            data={resumeData.workExperience}
            updateData={(value) => updateResumeData('workExperience', value)}
          />
        );
      case 4:
        return (
          <EducationForm
            data={resumeData.education}
            updateData={(value) => updateResumeData('education', value)}
          />
        );
      case 5:
        return (
          <SkillsForm
            data={resumeData.skills}
            updateData={(value) => updateResumeData('skills', value)}
          />
        );
      case 6:
        return <ResumeSummary data={resumeData} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative z-0 m-auto p-4">
      <StarsBackground className="absolute -top-20 -z-10" />
      <ShootingStars className="absolute -top-20 -z-10" />
      <div className="relative pb-10">
        <h1 className="relative bg-gradient-to-b from-neutral-800 via-white to-white bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
          Resume Builder
          <label className="absolute -bottom-10 right-0 inline-flex -translate-y-1/2 cursor-pointer items-center md:top-1/2">
            <input
              type="checkbox"
              checked={showPDFToolbar}
              onChange={() => setShowPDFToolbar((prev) => !prev)}
              className="peer sr-only"
            />
            <div className="peer relative h-6 w-11 rounded-full border-gray-600 bg-gray-700 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {showPDFToolbar ? 'Hide PDF Toolbar' : 'Show PDF Toolbar'}
            </span>
          </label>
        </h1>
      </div>
      <div className="mb-6">
        <div className="scrollbar-hide flex items-center justify-between overflow-x-auto">
          {Object.keys(ResumeBuilderTabs).map((s) => (
            <Button
              key={s}
              variant={Number(s) === step ? 'default' : 'outline'}
              onClick={() => setStep(Number(s))}
              className="mx-1 w-full"
            >
              {ResumeBuilderTabs[Number(s)]}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="flex min-h-[70vh] flex-col justify-between">{renderStep()}</div>
        <PDFViewer
          className={
            'min-h-[70vh] w-full rounded-lg border-2 border-gray-200 ' +
            (showPDFToolbar ? ' ' : ' hidden')
          }
          showToolbar={true}
        >
          <ResumePreview resumeData={previewData} />
        </PDFViewer>
        <PDFViewer
          className={
            'min-h-[70vh] w-full rounded-lg border-2 border-gray-200' +
            (showPDFToolbar ? ' hidden' : '')
          }
          showToolbar={false}
        >
          <ResumePreview resumeData={previewData} />
        </PDFViewer>
      </div>
      <div className="mx-auto mt-6 flex w-[90%] justify-between">
        <Button onClick={() => setStep(step - 1)} disabled={step === 1}>
          Previous
        </Button>
        <PDFDownloadLink
          document={<ResumePreview resumeData={previewData} />}
          fileName="resume.pdf"
          className="flex h-full w-full items-center justify-center"
        >
          <Button>
            Download PDF
            <Download size={16} className="ml-2" />
          </Button>
        </PDFDownloadLink>

        <Button onClick={() => setStep(step + 1)} disabled={step === 6}>
          {step === 5 ? 'Finish' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
