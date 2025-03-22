import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../../styles/AboutMe.css";

function AboutMe() {
  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        {
          name: "React",
          img: "https://img.icons8.com/plasticine/28/react.png",
        },
        {
          name: "Angular",
          img: "https://img.icons8.com/color/28/angularjs.png",
        },
        {
          name: "JavaScript (ES6+)",
          img: "https://img.icons8.com/arcade/28/javascript.png",
        },
        {
          name: "TypeScript",
          img: "https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/28/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-fresh-tal-revivo.png",
        },
        { name: "CSS", img: "https://img.icons8.com/office/28/css.png" },
        { name: "SASS", class: "light-background", img: "https://img.icons8.com/nolan/28/sass.png" },
        {
          name: "Tailwind",
          img: "https://img.icons8.com/plasticine/28/tailwind_css.png",
        },
        {
          name: "Bootstrap",
          img: "https://img.icons8.com/nolan/28/bootstrap.png",
        },
        { name: "MUI", img: "https://img.icons8.com/color/28/material-ui.png" },
        { name: "HTML", img: "https://img.icons8.com/color/28/html-5--v1.png" },
      ],
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "Node.js", img: "https://img.icons8.com/nolan/28/node-js.png" },
        {
          name: "Express.js",
          img: "https://img.icons8.com/officel/28/express-js.png",
        },
        {
          name: "REST APIs",
          img: "https://img.icons8.com/ultraviolet/28/api-settings.png",
        },
        {
          name: "GraphQL APIs",
          img: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/28/external-graphql-an-open-source-data-query-and-manipulation-language-for-api-logo-shadow-tal-revivo.png",
        },
        {
          name: "Linux / Unix",
          img: "https://img.icons8.com/external-those-icons-flat-those-icons/28/external-Linux-logos-and-brands-those-icons-flat-those-icons.png",
        },
        {
          name: "Java",
          img: "https://img.icons8.com/3d-fluency/28/java-coffee-cup-logo.png",
          class: "light-background",
        },
        {
          name: "Python",
          img: "https://img.icons8.com/3d-fluency/28/python.png",
        },
        {
          name: "C++",
          img: "https://img.icons8.com/nolan/28/c-plus-plus-logo.png",
        },
        {
          name: "C",
          img: "https://img.icons8.com/plasticine/28/c-programming.png",
        },
        {
          name: "PostgreSQL",
          img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/28/external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-color-tal-revivo.png",
        },
        {
          name: "MySQL",
          img: "https://img.icons8.com/external-those-icons-flat-those-icons/28/external-MySQL-programming-and-development-those-icons-flat-those-icons.png",
        },
      ],
    },
    {
      category: "Testing Frameworks & Project Management Tools",
      skills: [
        { name: "Karma", img: "/assets/Karma.png" },
        { name: "Jasmine", img: "/assets/Logo_jasmine.svg" },
        {
          name: "Git & GitHub",
          img: "https://img.icons8.com/fluency/28/github.png",
        },
        {
          name: "AWS",
          img: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/28/external-amazon-web-services-a-subsidiary-of-amazon-that-provides-on-demand-cloud-computing-logo-shadow-tal-revivo.png",
          class: "light-background",
        },
        {
          name: "Postman",
          img: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/28/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png",
        },
        { name: "SonarQube", img: "/assets/SONARqUBE.png" },
        { name: "JIRA", img: "https://img.icons8.com/color/28/jira.png" },
        {
          name: "Trello",
          img: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/28/external-trello-a-famous-app-for-building-multi-to-do-list-logo-shadow-tal-revivo.png",
        },
        { name: "ServiceNow", img: "/assets/service_now.jpg" },
      ],
    },
    {
      category: "Soft Skills & More",
      skills: [
        {
          name: "Problem-Solving",
          img: "https://img.icons8.com/external-flat-circular-vectorslab/28/external-Problem-Solving-business-and-management-flat-circular-vectorslab.png",
        },
        {
          name: "Team Collaboration",
          img: "https://img.icons8.com/color/28/collaborating-in-circle.png",
        },
        {
          name: "Data Structures & Algorithms",
          img: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/28/external-algorithms-data-analytics-flaticons-lineal-color-flat-icons.png",
        },
        {
          name: "Creative UI/UX Thinking",
          img: "https://img.icons8.com/dusk/28/web.png",
        },
        {
          name: "Agile Methodology",
          img: "https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/28/external-agile-web-design-and-development-flatart-icons-lineal-color-flatarticons.png",
        },
        {
          name: "Fast Learning & Adaptability",
          img: "https://img.icons8.com/arcade/28/learning.png",
        },
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
          Hey there, I'm{" "}
          <b>
            Isha Paliwal!{" "}
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/color/28/so-so-skin-type-1.png"
              alt="so-so-skin-type-1"
            />
          </b>{" "}
          A Software Developer crafting digital experiences with{" "}
          <b>React, Angular, and AI/NLP</b>, blending creativity with logic. My
          passion? Building sleek, high-performance web apps that captivate
          users and solve real-world problems.
        </p>

        <div className="about-grid">
          <div className="about-section">
            <h4 className="about-subtitle">
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/color/28/light-on--v1.png"
                alt="light-on--v1"
              />{" "}
              What I Do:
            </h4>
            <p>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/color/28/imac.png"
                alt="imac"
              />{" "}
              <b>Full-Stack Development</b> - Interactive UI & scalable
              backends.
            </p>
            <p>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/stickers/28/paint-palette-with-brush.png"
                alt="paint-palette-with-brush"
              />{" "}
              <b>Animation Enthusiast</b> - Love Lottie, anime.js, and motion
              effects.
            </p>
            <p>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/3d-fluency/28/robot-1.png"
                alt="robot-1"
              />{" "}
              <b>AI & NLP Explorer</b> - Making apps smarter with AI.
            </p>
          </div>

          <div className="about-section">
            <h4 className="about-subtitle">
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/stickers/28/map-pin.png"
                alt="map-pin"
              />{" "}
              Where I Am Now:
            </h4>
            <p>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/stickers/28/city-buildings.png"
                alt="city-buildings"
              />{" "}
              <b>Arlington, VA</b>
            </p>
            <p>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/stickers/28/graduation-cap.png"
                alt="graduation-cap"
              />{" "}
              <b>MS in Computer Science</b> at{" "}
              <b>The George Washington University</b>
            </p>
            <p>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/stickers/28/suitcase.png"
                alt="suitcase"
              />{" "}
              <b>Software Developer Intern</b> at <b>Mokxa Technologies</b>
            </p>
          </div>

          <div className="about-section">
            <h4 className="about-subtitle">
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/emoji/28/globe-showing-asia-australia-emoji.png"
                alt="globe-showing-asia-australia-emoji"
              />{" "}
              Beyond Tech:
            </h4>
            <p>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/stickers/28/airplane-take-off.png"
                alt="airplane-take-off"
              />{" "}
              <b>Globetrotter</b> - Love traveling and discovering new cultures.
            </p>
            <p>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/stickers/28/book-shelf.png"
                alt="book-shelf"
              />{" "}
              <b>Avid Reader</b> - Fiction, tech, philosophy - I devour it all.
            </p>
            <p>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/28/external-adventure-sports-extreme-sports-flaticons-flat-flat-icons.png"
                alt="external-adventure-sports-extreme-sports-flaticons-flat-flat-icons"
              />{" "}
              <b>Adventure Junkie</b> - Skydiving, rafting, and more.
            </p>
            <p>
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/stickers/28/diamond-heart.png"
                alt="diamond-heart"
              />{" "}
              <b>Giving Back</b> - Volunteered at orphanages, old age homes, and
              welfare centers.
            </p>
          </div>
        </div>

        <br />

        <p className="about-ending">
          Let's innovate, build, and create something extraordinary together!
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
        Every step forward is a step toward greatness!
      </div>

      <br />

      <div className="skills-container normalText">
        <h2 className="skills-title">
          <img
            width="60"
            height="60"
            src="https://img.icons8.com/plasticine/60/circuit.png"
            alt="circuit"
          />{" "}
          My Tech Arsenal
        </h2>
        <p className="skills-intro">
          A blend of **Frontend Magic{" "}
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/dusk/28/developer-mode.png"
            alt="developer-mode"
          />
          , Backend Logic{" "}
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/nolan/28/backend-development.png"
            alt="backend-development"
          />
          , AI Intelligence{" "}
          <img
            width="26"
            height="26"
            src="https://img.icons8.com/office/26/bot.png"
            alt="bot"
          />
          , and Problem-Solving{" "}
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/office/28/light-on--v1.png"
            alt="light-on--v1"
          />
          .**
        </p>
        <div className="skills-grid">
          {skillsData.map((section, index) => (
            <div key={index} className="skills-section">
              <h3 className="skills-category">{section.category}</h3>
              <div className="skills-pill-wrapper">
                {section.skills.map((skill, idx) => (
                  <div key={idx} className="skill-pill">
                    {skill.img && (
                      <img
                        width="28"
                        height="28"
                        src={skill.img}
                        className={skill.class ? skill.class : ""}
                        alt={skill.name}
                      />
                    )}
                    &nbsp;{skill.name}
                  </div>
                ))}
              </div>
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