import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AnimatedCardSection from "../special_components/AnimatedCardSection";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function LandingPage() {
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    setTimeout(() => setAnimationLoaded(true), 1000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setShowScrollArrow(false);
      } else {
        setShowScrollArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollByView = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div>
      <h2>Hey, Thanks for stopping by!</h2>
      <p className="normalText">
        Stay until the end, and you shall be rewarded!
      </p>
      <h3>Quick Links:</h3>
      <AnimatedCardSection />
      <div className="progressBar">
        {animationLoaded ? (
          <DotLottieReact
            src="https://lottie.host/ec2ec478-0cb4-455e-a473-3aadae5cbacd/Ip93kgh3T9.lottie"
            autoplay
          />
        ) : (
          <p>Loading animation...</p>
        )}
      </div>
      <div className="progressBarTagline normalText">
        A surprise awaits at the end... Keep going to unlock it! 🎁✨
      </div>

      {showScrollArrow && (
        <div className="scroll-down" onClick={scrollByView}>
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </div>
      )}
    </div>
  );
}

export default LandingPage;