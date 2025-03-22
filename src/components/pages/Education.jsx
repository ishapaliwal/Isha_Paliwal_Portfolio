import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Education.css";

function Education() {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "The George Washington University, Washington, DC",
      duration: "Aug 2023 - May 2025",
    },
    {
      degree: "B.Tech. in Electronics & Communication Engineering",
      institution: "Rajasthan Technical University, Kota",
      duration: "Aug 2015 - Jul 2019",
    },
  ];

  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimationLoaded(true), 1000);
  }, []);

  return (
    <div className="education-container normalText">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Education</h2>
        <div className="row mx-4">
          {educationData.map((edu, index) => (
            <div key={index} className="col-12 col-md-6 mb-4">
              <div className="p-3 border rounded h-100">
                <h5 className="mb-2">{edu.degree}</h5>
                <p className="mb-1"><strong>{edu.institution}</strong></p>
                <small>{edu.duration}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="progressBar text-center">
        {animationLoaded ? (
          <DotLottieReact
            src="https://lottie.host/faff2bcc-70dc-4859-b626-b7efd698fd1c/1prYo0yYe2.lottie"
            autoplay
            style={{ height: "100px" }}
          />
        ) : (
          <p>Loading animation...</p>
        )}
      </div>
      <div className="progressBarTagline normalText">
        You're halfway there! Keep up the momentum!
      </div>
    </div>
  );
}

export default Education;