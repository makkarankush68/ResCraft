'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ResumeDataType } from '@/lib/types';
import PersonalInfoForm from '../PersonalInfoForm';
import ProjectsForm from '../ProjectsForm';
import WorkExperienceForm from '../WorkExperienceForm';
import EducationForm from '../EducationForm';
import SkillsForm from '../SkillsForm';
import ResumeSummary from '../ResumeSummary';
import ResumePreview from '../previews/ResumePreview';
import ResumePreview2 from '../previews/ResumePreview2';
import ResumePreview3 from '../previews/ResumePreview3';
import { Download } from 'lucide-react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import ChooseTemplate from '../ChooseTemplate';
import { toast } from '@/hooks/use-toast';

const ResumeBuilderTabs: { [key: number]: string } = {
  0: 'Choose Template',
  1: 'Personal Info',
  2: 'Projects',
  3: 'Work Experience',
  4: 'Education',
  5: 'Skills',
  6: 'Summary'
};

export default function ResumeBuilder({ initial }: { initial: ResumeDataType }) {
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);
  const [resumeData, setResumeData] = useState<ResumeDataType>(initial);
  const [previewData, setPreviewData] = useState<ResumeDataType>(initial);
  const [selectedTemplate, setSelectedTemplate] = useState<number>(initial.template);
  const [showPDFToolbar, setShowPDFToolbar] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (loading) setLoading(false);
  }, [loading]);

  const updateResumeData = (
    field: keyof ResumeDataType,
    value: ResumeDataType[keyof ResumeDataType]
  ) => {
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
    const patchResumeData = async () => {
      const res = await fetch(`/api/resume/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: previewData
        })
      });
      if (res.ok) {
        toast({
          description: 'Resume updated successfully ✅',
          type: 'foreground'
        });
      } else {
        console.error('Failed to update resume');
        toast({
          description: 'Failed to update resume',
          variant: 'destructive'
        });
      }
    };
    if (!loading) patchResumeData();
  }, [previewData]);

  useEffect(() => {
    updateResumeData('template', selectedTemplate);
  }, [selectedTemplate]);

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <ChooseTemplate
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
        );
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

  const renderResumePreview = () => {
    switch (selectedTemplate) {
      case 1:
        return <ResumePreview resumeData={previewData} />;
      case 2:
        return <ResumePreview2 resumeData={previewData} />;
      case 3:
        return <ResumePreview3 resumeData={previewData} />;
      default:
        return <ResumePreview resumeData={previewData} />;
    }
  };

  const handleNext = () => {
    if (!resumeData.title) {
      alert('Please choose a template');
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="relative z-0 m-auto p-4 lg:p-8">
      <div className="relative pb-10">
        <h1 className="relative bg-gradient-to-b from-neutral-400 via-white to-white bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
          Resume Builder
          <label
            className={
              'absolute -bottom-10 right-0 inline-flex -translate-y-1/2 cursor-pointer items-center md:top-1/2' +
              (step === 0 ? ' hidden' : '')
            }
          >
            <input
              type="checkbox"
              checked={showPDFToolbar}
              onChange={() => setShowPDFToolbar((prev) => !prev)}
              className="peer sr-only"
            />
            <div className="peer relative h-6 w-11 rounded-full border-gray-600 bg-gray-700 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
            <span className="ms-3 text-sm font-medium tracking-normal text-gray-900 dark:text-gray-300">
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

      <div className={'grid gap-4 lg:grid-cols-2'}>
        <div className="flex min-h-[70vh] flex-col justify-between">{renderStep()}</div>
        <div className="mx-auto mt-6 flex w-[90%] justify-between gap-2 max-lg:flex-col lg:hidden">
          <div className="flex justify-around">
            <Button onClick={() => setStep(step - 1)} disabled={step === 0}>
              Previous
            </Button>
            <Button onClick={handleNext} disabled={step === 6}>
              {step === 5 ? 'Finish' : 'Next'}
            </Button>
          </div>
          {!loading && (
            <PDFDownloadLink
              document={renderResumePreview()}
              fileName="resume.pdf"
              className="flex h-full w-full items-center justify-center"
            >
              <Button>
                Download PDF
                <Download size={16} className="ml-2" />
              </Button>
            </PDFDownloadLink>
          )}
        </div>
        {!loading && (
          <>
            <PDFViewer
              className={
                'max-h-fit min-h-[50vh] w-full rounded-xl px-6 sm:min-h-[70vh] ' +
                (showPDFToolbar ? ' ' : ' hidden')
              }
              showToolbar={true}
            >
              {renderResumePreview()}
            </PDFViewer>
            <PDFViewer
              className={
                'max-h-fit min-h-[50vh] w-full rounded-xl px-6 sm:min-h-[70vh] ' +
                (showPDFToolbar ? ' hidden' : '')
              }
              showToolbar={false}
            >
              {renderResumePreview()}
            </PDFViewer>
          </>
        )}
      </div>

      <div className="mx-auto mt-6 flex w-[90%] justify-between max-lg:hidden">
        <Button onClick={() => setStep(step - 1)} disabled={step === 0}>
          Previous
        </Button>
        {!loading && (
          <PDFDownloadLink
            document={renderResumePreview()}
            fileName="resume.pdf"
            className="flex h-full w-full items-center justify-center"
          >
            <Button>
              Download PDF
              <Download size={16} className="ml-2" />
            </Button>
          </PDFDownloadLink>
        )}
        <Button onClick={() => setStep(step + 1)} disabled={step === 6}>
          {step === 5 ? 'Finish' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
