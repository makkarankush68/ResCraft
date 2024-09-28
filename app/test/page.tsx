'use client';
import ResumeBlob from '@/components/test/ResumeBlob';
const ResumeRenderer = () => {
  return <ResumeBlob />;
};

export default ResumeRenderer;
// 'use client';

// import { BlobProvider } from '@react-pdf/renderer';
// import { useRef } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url
// ).toString();

// type Props = {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   document: any;
//   filename?: string;
//   isLoading?: boolean;
//   className?: React.CSSProperties | string;
// };

// const LoadingScreen = () => (
//   <div className="pt-10">
//     <span>Loading...</span>
//   </div>
// );

// const PdfExport = (props: Props) => {
//   const parentRef = useRef<HTMLDivElement>(null);

//   return (
//     <div id="pdf" ref={parentRef} className={props.className + ''}>
//       <BlobProvider document={props.document}>
//         {({ url, loading }) =>
//           loading ? (
//             <LoadingScreen />
//           ) : (
//             <Document file={url}>
//               <Page pageNumber={1} width={parentRef.current?.clientWidth} />
//             </Document>
//           )
//         }
//       </BlobProvider>
//     </div>
//   );
// };

// export default PdfExport;
