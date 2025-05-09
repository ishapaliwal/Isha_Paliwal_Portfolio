import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../../styles/Experience.css";

const experiences = [
  {
    role: "Software Developer",
    company: "Mokxa Technologies, LLC",
    location: "Columbia, Maryland",
    duration: "Jan 2024 - Present",
    clients: ["One of the “Big Four” accounting firms and a U.S. political organization"],
    description:
      "Developed a loan application system to streamline document uploads and automate workflows, improving efficiency by 25%. Led frontend development of Vote Builder, optimizing voter outreach by 30% and mapping 500+ turfs for canvassing.",
  },
  {
    role: "Senior Software Developer",
    company: "HCL Technologies Limited",
    location: "Bangalore, India",
    duration: "Jan 2022 - Aug 2023",
    clients: ["Top-tier British life insurance, pensions, and investment management firms"],
    description:
      "Engineered enterprise content and communication solutions, enhancing system accessibility by 30%. Spearheaded migration to PrimeNG and optimized CI/CD pipelines, reducing deployment times by 20% while achieving 98% test coverage.",
  },
  {
    role: "Senior Systems Engineer",
    company: "Infosys Ltd",
    location: "Pune, India",
    duration: "Sep 2019 - Dec 2021",
    clients: ["Fortune 100 Aerospace Client"],
    description:
      "Built single-page applications for Boeing, serving 10K+ users daily while handling 50+ change requests per month. Led maintenance efforts, achieving a 95% bug resolution rate and improving code performance by 25%.",
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="experience_section">
      <h2>Experience</h2>
      <div className="slider normalText">
        <button className="slider--btn slider--btn__prev" onClick={handlePrev}>
          ❮
        </button>

        <div className="slides__wrapper">
          {experiences.map((exp, index) => {
            let position =
              (index - activeIndex + experiences.length) % experiences.length;

            return (
              <motion.div
                key={index}
                className={`slide ${
                  position === 0
                    ? "center"
                    : position === 1
                    ? "right"
                    : position === experiences.length - 1
                    ? "left"
                    : "hidden"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: position === 0 ? 1 : 0.8,
                  scale: position === 0 ? 1.2 : 0.9,
                  x: position === 0 ? 0 : position === 1 ? 340 : -340,
                }}
                whileHover={{ scale: position !== 0 ? 1 : 1.1 }}
                transition={{ duration: 0.5 }}
                onClick={() => setActiveIndex(index)}
              >
                <h3 className="slide-title">{exp.role}</h3>
                <h4 className="slide-company">{exp.company}</h4>
                <p className="slide-location">{exp.location}</p>
                <p className="slide-duration">{exp.duration}</p>
                <p className="slide-clients">Clients: {exp.clients}</p>
                <p className="slide-description">{exp.description}</p>
              </motion.div>
            );
          })}
        </div>

        <button className="slider--btn slider--btn__next" onClick={handleNext}>
          ❯
        </button>
      </div>
      <div className="progressBar">
        {animationLoaded ? (
          <DotLottieReact
            src="https://lottie.host/ebcba549-fe9a-45a2-b0ed-1965eff09cc2/mmdcMNM5XJ.lottie"
            autoplay
          />
        ) : (
          <p>Loading animation...</p>
        )}
      </div>
      <div className="progressBarTagline normalText">
        You are doing great! Your current score is 60/100!
      </div>

      {showScrollArrow && (
        <div className="scroll-down" onClick={scrollByView}>
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </div>
      )}
    </div>
  );
};

export default Experience;