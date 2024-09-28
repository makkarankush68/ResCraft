// import { useEffect, useState } from 'react';
// import {
//   //  Document, Page, PDFViewer,
//   pdf
// } from '@react-pdf/renderer';
// import ResumePreview from '../ResumePreview';
// import CanvasPdf from './CanvasPdf';
// import { initialResumeData } from '../../lib/initialResumeData';

const ResumeRenderer = () => {
  // const [resumeBlob, setResumeBlob] = useState(null);
  // const [resumeUrl, setResumeUrl] = useState(null);

  // useEffect(() => {
  //   const generateResume = async () => {
  //     const blob = await pdf(<ResumePreview resumeData={initialResumeData} />).toBlob();
  //     console.log(blob);
  //     setResumeBlob(blob);
  //     const url = URL.createObjectURL(blob);

  //     setResumeUrl(url);
  //   };

  //   generateResume();
  // }, []);
  return <></>;
  return (
    <div>
      <h2>Resume Viewer</h2>
      {/* {resumeBlob && (
        <PDFViewer value={resumeBlob} onUrlChange={() => {}} onRenderError={() => {}} />
      )}
      <div>
        <h2>Resume Viewer</h2>
        {resumeUrl ? (
          <>
            <a href={resumeUrl} download="resume.pdf">
              Download Resume
            </a>
            <iframe src={resumeUrl} width="100%" height="600"></iframe>
           
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
            <object data={resumeUrl} type="application/pdf" width="100%" height="600">
              <p>
                It appears you dont have a PDF plugin for this browser. You can{' '}
                <a href={resumeUrl}>click here to download the PDF file.</a>
              </p>
            </object>
          </>
        ) : (
          <p>Loading resume...</p>
        )}
      </div> */}
      {/* <CanvasPdf pdfBlob={resumeBlob} pdfUrl={resumeUrl} /> */}
    </div>
  );
};

export default ResumeRenderer;
