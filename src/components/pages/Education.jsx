import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import "../../styles/Education.css";

function Education() {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "The George Washington University, Washington, DC",
      duration: "May 2025",
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
    <div>
      <div className="education-container normalText">
        <div className="education-content">
          <h2 className="education-title">Education</h2>
          <div className="education-grid">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <span className="education-duration">{edu.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="progressBar">
        {animationLoaded ? (
          <DotLottieReact
            src="https://lottie.host/faff2bcc-70dc-4859-b626-b7efd698fd1c/1prYo0yYe2.lottie"
            loop
            autoplay
          />
        ) : (
          <p>Loading animation...</p>
        )}
      </div>
      <div className="progressBarTagline normalText">
        Every step forward is a step toward greatness! 🚀
      </div>
    </div>
  );
}

export default Education;