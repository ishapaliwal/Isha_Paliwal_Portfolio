import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Card,
  CardActionArea,
  Typography,
  Dialog,
  DialogContent,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../../styles/Projects.css";

const projects = [
  {
    title: "ConnectWise: Full-Stack Social Media Platform",
    gif: "https://lottie.host/40b604ea-b092-4051-8825-97eb707ae9f8/vSjZ5ebHMI.lottie",
    img: "/assets/ConnectWise_Social_App.png",
    description:
      "Developed a full-stack social media app featuring real-time messaging, content sharing, user engagement, and an admin dashboard. Integrated AWS S3 for image uploads, responsive post grid layout, and JWT-based authentication. Users can share posts via links, chat, or explore public content.",
    status: "Completed",
    languages: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "PostgreSQL",
      "AWS S3",
      "JWT Auth",
      "Material UI",
      "Axios",
      "Socket.io (Polling)",
      "JavaScript",
      "CSS",
      "HTML"
    ],
    link: "https://connectwise.netlify.app/",
  },  
  {
    title: "Image Colorization: From Grayscale to Vibrant Visuals",
    gif: "https://lottie.host/b5650ec5-fd09-4878-a7e5-613c72b2acd2/R9kvFAVgtX.lottie",
    img: "/assets/Image_Colorization.jpg",
    description:
      "Explored and compared deep learning architectures like Pix2Pix, VGG16, and EfficientNet-UNet for transforming grayscale images into realistic color images, enhancing visual content through learned color mapping.",
    status: "Completed",
    languages: [
      "Python",
      "Deep Learning",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "GAN",
      "Pix2Pix",
      "EfficientNet",
      "UNet",
    ],
    link: "https://blogs.gwu.edu/isha-paliwal/2024/12/16/image-colorization-from-grayscale-to-vibrant-visuals/",
  },
  {
    title: "Angular Flight Booking Project",
    gif: "https://lottie.host/ff7c4f08-2b77-4442-9890-2155e02c4286/gmpWGQ1Z8X.lottie",
    img: "/assets/Flight_Booking.png",
    description:
      "Engineered a web application using Angular to facilitate flight bookings, featuring user-friendly interfaces for searching flights, booking tickets, and managing reservations.",
    languages: [
      "Angular",
      "Typescript",
      "PrimeNG",
      "Angular Material",
      "JS",
      "HTML",
      "CSS",
      "Bootstrap",
      "RxJS",
      "Angular Forms",
      "JavaScript",
    ],
    status: "Completed",
    link: "https://github.com/ishapaliwal/FlightBooking_Project_Angular",
  },
  {
    title: "Chat with PDF - Conversational AI model",
    gif: "https://lottie.host/3ebeab0c-a724-4b7c-87d5-d88d1b226e6b/NiMpZMpXT3.lottie",
    img: "/assets/Chat_with_PDF.jpg",
    description:
      "Implemented a local-first conversational AI that lets you chat with PDF documents using Meta’s LLaMA 2 7B Chat model (GGUF), powered by 'llama-cpp-python' for fast, offline inference.",
    languages: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "LLaMA 2 7B Chat (GGUF)",
      "llama-cpp-python",
      "PyPDF2 or pdfminer.six",
      "faiss",
      "langchain",
    ],
    status: "Completed",
    link: "https://github.com/ishapaliwal/Chat_with_PDF_-_Conversational_AI_model",
  },
  {
    title: "CrowdQuant: Advanced Computer Vision for Mall Traffic Analysis",
    gif: "https://lottie.host/db1b745d-9444-4de2-bfaf-7cac4d4d6f90/3zvDExrX7n.lottie",
    img: "/assets/Crowd_Quant.jpg",
    description:
      "Built a Python-based tool utilizing the YOLOv3 deep learning model to analyze mall surveillance footage, enabling real-time crowd counting and movement pattern analysis to assist mall management in operational planning and crowd control.",
    languages: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "OpenCV",
      "YOLOv3",
      "NumPy",
      "Matplotlib",
    ],
    status: "Completed",
    link: "https://blogs.gwu.edu/isha-paliwal/2024/10/21/crowdquant-advanced-computer-vision-for-mall-traffic-analysis/",
  },
  {
    title:
      "Turning Pixels into Art: Building an ASCII Art Generator with Python",
    gif: "https://lottie.host/cb2eef77-dd1d-4647-a962-d104351ff093/2qRBMWaKjt.lottie",
    img: "/assets/ASCII_Image.jpg",
    description:
      "Created a Python-based tool that converts images into text-based ASCII art by mapping pixel brightness to corresponding ASCII characters, enabling creative visual representations using simple text.",
    languages: ["Python", "Machine Learning", "Pillow", "NumPy", "Matplotlib"],
    status: "Completed",
    link: "https://blogs.gwu.edu/isha-paliwal/2024/09/29/turning-pixels-into-art-building-an-ascii-art-generator-with-python/",
  },
  {
    title: "Cancer Genomics and Treatment Prediction",
    gif: "https://lottie.host/6aa18644-1fe3-4a85-b031-7bd8875c7565/JLvObOJDBh.lottie",
    img: "/assets/Cancer_Genomics.png",
    description:
      "Utilized genomic data from TCGA to develop a multi-output classification model predicting patient survival, cancer stage, and treatment type; paving the way for personalized cancer treatment using machine learning.",
    status: "Completed",
    languages: [
      "Python",
      "Machine Learning",
      "Data Mining",
      "NumPy",
      "Matplotlib",
    ],
    link: "https://github.com/ishapaliwal/Cancer_Genomics_and_Treatment_Prediction",
  },
  {
    title: "Mood Swings Prediction in Mental Health Dataset",
    gif: "https://lottie.host/d7cda788-121d-4c2a-8ecb-9b95d8b4edd3/ZEtztg8ssc.lottie",
    img: "/assets/Mood_Swings.png",
    description:
      "Designed a machine learning pipeline using self-reported mental health survey data to predict mood swing severity, applying multi-output classification with models like XGBoost to enhance early diagnosis and personalized intervention strategies.",
    languages: [
      "Python",
      "Machine Learning",
      "Data Mining",
      "NumPy",
      "Matplotlib",
    ],
    status: "Completed",
    link: "https://github.com/ishapaliwal/Mood_Swings_Prediction_in_Mental_Health_Dataset",
  },
  {
    title: "My personal portfolio website",
    gif: "https://lottie.host/9074eeea-6f6e-461f-83ff-28dc88bd1f51/z6PvOwM66U.lottie",
    img: "/assets/Portfolio_image.png",
    description:
      "Crafted a personal portfolio website using React, incorporating Lottie animations, TsParticles effects, and a light/dark theme toggle to enhance user experience and interactivity.",
    languages: [
      "React",
      "React-Bootstrap",
      "Material UI",
      "JavaScript",
      "JS",
      "HTML",
      "CSS",
      "Framer-Motion",
      "LottieFiles",
      "emailjs-com",
      "Bootstrap",
      "Material Icons",
      "Three.js",
      "ThreeJS"
    ],
    status: "Completed",
    link: "https://github.com/ishapaliwal/Isha_Paliwal_Portfolio",
  },
  {
    title: "Maps: Digital Playground and Tools",
    gif: "https://lottie.host/dab2ab28-5538-4bf7-9730-8d2aa2eb2640/3xn03OKn3x.lottie",
    img: "/assets/Maps_Playground.png",
    description:
      "Architecting an interactive web application using Angular that integrates advanced mapping functionalities, enabling users to explore, visualize, and interact with geospatial data seamlessly.",
    languages: [
      "TypeScript",
      "JavaScript",
      "PrimeNG",
      "HTML",
      "CSS",
      "Angular",
      "Leaflet",
      "OpenLayers",
      "MapLibre GL",
      "Angular Material",
      "Clarity Design System",
      "D3.js",
      "RxJS",
      "ngx-translate",
    ],
    status: "In-progress",
    link: "https://github.com/ishapaliwal/Maps_-_Digital_Playground_and_Tools",
  },
  {
    title: "AI Integrated E-Commerce Retail Website",
    gif: "https://lottie.host/e8442322-4054-4db2-bd10-728e0d3d9c6a/ZWEkAi5fwJ.lottie",
    img: "/assets/Retail_Website.png",
    description:
      "Developing an e-commerce retail website integrating artificial intelligence to enhance user experience through personalized recommendations, intelligent search, and automated customer support.",
    languages: [
      "React",
      "React-Bootstrap",
      "Material UI",
      "JavaScript",
      "JS",
      "HTML",
      "CSS",
      "Framer-Motion",
      "LottieFiles",
      "emailjs-com",
      "Bootstrap",
      "Material Icons",
    ],
    status: "In-progress",
    link: "https://github.com/ishapaliwal/AI_Integrated_ECommerce_Retail_Website",
  },
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesStatus = statusFilter
      ? project.status.toLowerCase() === statusFilter.toLowerCase()
      : true;
    const matchesKeyword =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLanguage =
      languageFilter === "" ||
      (project.languages &&
        project.languages.some((lang) =>
          lang.toLowerCase().includes(languageFilter.toLowerCase())
        ));

    return matchesStatus && matchesKeyword && matchesLanguage;
  });

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

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h2>Projects</h2>
      <br />
      <div className="search-filters">
        <input
          type="text"
          placeholder="Name"
          value={searchTerm}
          className="form-control"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={statusFilter}
          className="form-select custom-select"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Completed">Completed</option>
          <option value="In-progress">In-progress</option>
        </select>
        <input
          type="text"
          className="form-control"
          placeholder="Tech Stack"
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}
        />
      </div>
      <div className="projects-container normalText">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card-content">
            <Card className="project-card" onClick={() => handleOpen(project)}>
              <CardActionArea>
                {animationLoaded ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="project-image"
                  />
                ) : (
                  <p>Loading animation...</p>
                )}
              </CardActionArea>
            </Card>
            <Typography variant="subtitle1" className="project-title">
              {project.title}
            </Typography>
          </div>
        ))}

        <Dialog open={open} onClose={handleClose} maxWidth="md">
          {selectedProject && (
            <DialogContent className="dialog-content">
              <IconButton
                onClick={handleClose}
                className="dialog-close-icon"
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h5" className="dialog-title">
                {selectedProject.title}
              </Typography>
              <div className="dialog-body">
                {animationLoaded ? (
                  <DotLottieReact src={selectedProject.gif} loop autoplay />
                ) : (
                  <p>Loading animation...</p>
                )}
                <Typography variant="body1" className="dialog-description">
                  {selectedProject.description}
                </Typography>
                <Button
                  href={selectedProject.link}
                  target="_blank"
                  className="dialog-link-btn"
                >
                  View Project
                </Button>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
      <div className="progressBar">
        {animationLoaded ? (
          <DotLottieReact
            src="https://lottie.host/3a7aa5af-6903-4956-b707-25af85c875f7/m2uSJqDool.lottie"
            autoplay
          />
        ) : (
          <p>Loading animation...</p>
        )}
      </div>
      <div className="progressBarTagline normalText">
        Keep going! You're closer than you think.
      </div>

      {showScrollArrow && (
        <div className="scroll-down" onClick={scrollByView}>
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </div>
      )}
    </div>
  );
};

export default Projects;