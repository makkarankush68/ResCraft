'use client';
import React, { useEffect, useState } from 'react';
import ResumePreview from './previews/ResumePreview';
import ResumePreview2 from './previews/ResumePreview2';
import ResumePreview3 from './previews/ResumePreview3';
import { ResumeDataType } from '@/lib/types';
import { PDFViewer } from '@react-pdf/renderer';

const ViewResume = ({ data }: { data: ResumeDataType }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) setLoading(false);
  }, [loading]);
  const selectedTemplate = Number(data.template);

  const renderResumePreview = () => {
    switch (selectedTemplate) {
      case 1:
        return <ResumePreview resumeData={data} />;
      case 2:
        return <ResumePreview2 resumeData={data} />;
      case 3:
        return <ResumePreview3 resumeData={data} />;
      default:
        return <ResumePreview resumeData={data} />;
    }
  };
  return (
    <div>
      <h2 className="m-6 mt-4 text-center text-3xl font-semibold">
        {data.title
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}
      </h2>
      {!loading ? (
        <PDFViewer
          className={'max-h-fit min-h-[100vh] w-full rounded-xl px-6 sm:min-h-[70vh]'}
          showToolbar={true}
        >
          {renderResumePreview()}
        </PDFViewer>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ViewResume;
