import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../../styles/AboutMe.css";

function AboutMe() {
  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Angular", level: 85 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "CSS & SASS", level: 90 },
        { name: "Tailwind / Bootstrap / MUI", level: 85 },
      ],
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "Node.js & Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL / MySQL", level: 70 },
        { name: "REST & GraphQL APIs", level: 85 },
      ],
    },
    {
      category: "AI / NLP & Tools",
      skills: [
        { name: "Natural Language Processing (NLP)", level: 75 },
        { name: "OpenAI / LangChain", level: 70 },
        { name: "TensorFlow / PyTorch (Basics)", level: 60 },
        { name: "Git & GitHub", level: 90 },
        { name: "Docker & CI/CD", level: 70 },
      ],
    },
    {
      category: "Soft Skills & More",
      skills: [
        { name: "Problem-Solving", level: 95 },
        { name: "Team Collaboration", level: 90 },
        { name: "Creative UI/UX Thinking", level: 85 },
        { name: "Fast Learning & Adaptability", level: 95 },
      ],
    },
  ];

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
      <div className="about-container normalText">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hey there, I'm <b>Isha Paliwal! 👋</b> A Software Developer crafting
          digital experiences with <b>React, Angular, and AI/NLP</b>, blending
          creativity with logic. My passion? Building sleek, high-performance
          web apps that captivate users and solve real-world problems.
        </p>

        <div className="about-grid">
          <div className="about-section">
            <h4 className="about-subtitle">💡 What I Do:</h4>
            <p>
              🖥️ <b>Full-Stack Development</b> - Interactive UI & scalable
              backends.
            </p>
            <p>
              🎨 <b>Animation Enthusiast</b> - Love Lottie, anime.js, and motion
              effects.
            </p>
            <p>
              🤖 <b>AI & NLP Explorer</b> - Making apps smarter with AI.
            </p>
          </div>

          <div className="about-section">
            <h4 className="about-subtitle">📍 Where I Am Now:</h4>
            <p>
              🏙️ <b>Arlington, VA</b>
            </p>
            <p>
              🎓 <b>MS in Computer Science</b> at{" "}
              <b>The George Washington University</b>
            </p>
            <p>
              💼 <b>Software Developer Intern</b> at <b>Mokxa Technologies</b>
            </p>
          </div>

          <div className="about-section">
            <h4 className="about-subtitle">🌍 Beyond Tech:</h4>
            <p>
              ✈️ <b>Globetrotter</b> - Love traveling and discovering new
              cultures.
            </p>
            <p>
              📚 <b>Avid Reader</b> - Fiction, tech, philosophy - I devour it
              all.
            </p>
            <p>
              🎢 <b>Adventure Junkie</b> - Skydiving, rafting, and more.
            </p>
            <p>
              ❤️ <b>Giving Back</b> - Volunteered at orphanages, old age homes,
              and welfare centers.
            </p>
          </div>
        </div>

        <br />

        <p className="about-ending">
          🎯 Let's innovate, build, and create something extraordinary together!
          🚀
        </p>
      </div>

      <br />

      <div className="progressBar">
        {animationLoaded ? (
          <DotLottieReact
            src="https://lottie.host/fcf095d3-2790-4d03-9f31-7aa227ed4498/ZiCvCrHk9p.lottie"
            autoplay
          />
        ) : (
          <p>Loading animation...</p>
        )}
      </div>
      <div className="progressBarTagline normalText">
        Every step forward is a step toward greatness! 🚀
      </div>

      <br />

      <div className="skills-container normalText">
        <h2 className="skills-title">🚀 My Tech Arsenal</h2>
        <p className="skills-intro">
          A blend of **Frontend Magic ✨, Backend Logic 🛠, AI Intelligence 🤖,
          and Problem-Solving 💡.**
        </p>
        <div className="skills-grid">
          {skillsData.map((section, index) => (
            <div key={index} className="skills-section">
              <h3 className="skills-category">{section.category}</h3>
              {section.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="skill-percent">{skill.level}%</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {showScrollArrow && (
        <div className="scroll-down" onClick={scrollByView}>
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </div>
      )}
    </div>
  );
}

export default AboutMe;