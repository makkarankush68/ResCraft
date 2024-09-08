'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ResumeData } from '@/lib/types';
import PersonalInfoForm from './PersonalInfoForm';
import ProjectsForm from './ProjectsForm';
import WorkExperienceForm from './WorkExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import ResumeSummary from './ResumeSummary';

const initialResumeData: ResumeData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    twitter: ''
  },
  projects: [{ name: '', description: [''], techUsed: [''], date: '' }],
  workExperience: [
    {
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ['']
    }
  ],
  education: [{ institution: '', degree: '', startYear: '', endYear: '', marks: '' }],
  skills: { technical: [''], soft: [''], tools: [''], other: [''] }
};

export default function ResumeBuilder() {
  const [step, setStep] = useState(1);
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);

  const updateResumeData = (field: keyof ResumeData, value: ResumeData[keyof ResumeData]) => {
    setResumeData((prev) => ({ ...prev, [field]: value }));
  };

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
    <div className="container m-auto max-w-4xl p-4">
      <h1 className="mb-6 text-center text-3xl font-bold">Resume Builder</h1>
      <div className="mb-6">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <Button
              key={s}
              variant={s === step ? 'default' : 'outline'}
              onClick={() => setStep(s)}
              className="mx-1 w-full"
            >
              {s === 1
                ? 'Personal'
                : s === 2
                  ? 'Projects'
                  : s === 3
                    ? 'Work'
                    : s === 4
                      ? 'Education'
                      : s === 5
                        ? 'Skills'
                        : 'Summary'}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex min-h-[70vh] flex-col justify-between">
        {renderStep()}
        <div className="mt-6 flex justify-between">
          <Button onClick={() => setStep(step - 1)} disabled={step === 1}>
            Previous
          </Button>
          <Button onClick={() => setStep(step + 1)} disabled={step === 6}>
            {step === 5 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}
