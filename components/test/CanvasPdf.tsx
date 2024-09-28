import React, {
  useEffect
  // useRef
} from 'react';
// import {pdfjs} from 'react-pdf';
// import pdfWorker from '../lib/pdf.worker';

// pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const PDFViewer = ({ pdfBlob }: { pdfBlob: Blob }) => {
  // const canvasRef = useRef();

  useEffect(() => {
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const loadPdf = async () => {
      try {
        // Load the PDF document
        // const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        // Get the first page
        // const page = await pdf.getPage(1);
        // const viewport = page.getViewport({ scale: 1.5 });
        // const canvas = canvasRef.current;
        // const context = canvas.getContext('2d');
        // canvas.height = viewport.height;
        // canvas.width = viewport.width;
        // Render the page into the canvas
        // const renderContext = {
        //   canvasContext: context,
        //   viewport: viewport
        // };
        // await page.render(renderContext).promise;
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    };

    loadPdf();

    // Cleanup object URL
    return () => {
      URL.revokeObjectURL(pdfUrl);
    };
  }, [pdfBlob]);

  return <div>{/* <canvas ref={canvasRef}></canvas> */}</div>;
};

export default PDFViewer;
