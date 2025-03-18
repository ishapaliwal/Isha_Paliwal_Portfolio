import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js";

// pdfjs.GlobalWorkerOptions.workerSrc = URL.createObjectURL(
//   new Blob([pdfWorker], { type: "application/javascript" })
// );

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimationLoaded(true), 1000);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <h2>📄 My Resume</h2>
      {/* <Document
        file="/assets/Isha_Paliwal_Final_Resume.pdf" // Ensure the PDF is in the "public/assets" folder
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p> */}
      <div className="progressBar">
        {animationLoaded ? (
          <DotLottieReact
            src="https://lottie.host/ee80d5cc-73f7-485d-b8ba-1dd40c5de154/jBZCko9DMw.lottie"
            loop
            autoplay
          />
        ) : (
          <p>Loading animation...</p>
        )}
      </div>
      <div className="progressBarTagline normalText">
        Keep going! You're closer than you think. 🎯
      </div>
    </div>
  );
};

export default Resume;