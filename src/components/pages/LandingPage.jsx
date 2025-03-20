import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AnimatedCardSection from "../special_components/AnimatedCardSection";

function LandingPage() {
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimationLoaded(true), 1000);
  }, []);

  return (
    <div>
      <h2>Hey, Thanks for stopping by!</h2>
      <p className="normalText">
        Stay until the end, and you shall be rewarded!
      </p>
      <h3>Quick Links:</h3>
      <AnimatedCardSection />
      <div className="progressBar">
        { animationLoaded ? (
        <DotLottieReact
          src="https://lottie.host/ec2ec478-0cb4-455e-a473-3aadae5cbacd/Ip93kgh3T9.lottie"
          loop
          autoplay
        />
        ) : (<p>Loading animation...</p>
        ) }
      </div>
      <div className="progressBarTagline normalText">A surprise awaits at the end... Keep going to unlock it! 🎁✨</div>
    </div>
  );
}

export default LandingPage;