import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Resume = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const headingStyle = {textAlign: "center"};

  useEffect(() => {
    setTimeout(() => setAnimationLoaded(true), 1000);
  }, []);

  return (
    <div>
      <h2 style={{headingStyle}}>My Resume</h2>
      <div>
            {!loadFailed ? (
                <iframe
                title="Resume"
                    src="/assets/Isha_Paliwal_Final_Resume.pdf#navpanes=0"
                    width="100%"
                    height="800px"
                    style={{ border: "none" }}
                    onError={() => setLoadFailed(true)} 
                />
            ) : (
                <div style={{ textAlign: "center", padding: "20px" }}>
                    <p>PDF failed to load. Click below to download:</p>
                    <a href="/assets/Isha_Paliwal_Final_Resume.pdf" download="Isha_Paliwal_Resume.pdf">
                        <button>Download Resume</button>
                    </a>
                </div>
            )}
        </div>
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