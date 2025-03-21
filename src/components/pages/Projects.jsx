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
    title: "Image Colorization: From Grayscale to Vibrant Visuals",
    gif: "https://lottie.host/b5650ec5-fd09-4878-a7e5-613c72b2acd2/R9kvFAVgtX.lottie",
    img: "https://picsum.photos/200/300",
    description: "A modern photography website.",
    status: "Completed",
    link: "https://blogs.gwu.edu/isha-paliwal/2024/12/16/image-colorization-from-grayscale-to-vibrant-visuals/",
  },
  {
    title: "Cancer Genomics and Treatment Prediction",
    gif: "https://lottie.host/6aa18644-1fe3-4a85-b031-7bd8875c7565/JLvObOJDBh.lottie",
    img: "https://picsum.photos/200/300",
    description: "E-commerce store for custom jewelry.",
    status: "Completed",
    link: "https://github.com/ishapaliwal",
  },
  {
    title: "Mood Swings Prediction in Mental Health Dataset",
    gif: "https://lottie.host/d7cda788-121d-4c2a-8ecb-9b95d8b4edd3/ZEtztg8ssc.lottie",
    img: "https://picsum.photos/200/300",
    description: "Mood Swings Prediction in Mental Health Dataset",
    status: "Completed",
    link: "https://github.com/ishapaliwal",
  },
  {
    title: "My personal portfolio website",
    gif: "https://lottie.host/4d40e2a1-95bb-4c15-9fcb-8f9bb0dfd6ac/2WxB3YAYZ7.lottie",
    img: "https://picsum.photos/200/300",
    description: "Educational platform for kids.",
    status: "Completed",
    link: "https://github.com/ishapaliwal/Isha_Paliwal_Portfolio",
  },
  {
    title: "E-Commerce Retail Website",
    gif: "https://lottie.host/e8442322-4054-4db2-bd10-728e0d3d9c6a/ZWEkAi5fwJ.lottie",
    img: "https://picsum.photos/200/300",
    description: "Medical research network system.",
    status: "In-progress",
    link: "https://github.com/ishapaliwal",
  },
  {
    title:
      "Turning Pixels into Art: Building an ASCII Art Generator with Python",
    gif: "https://lottie.host/cb2eef77-dd1d-4647-a962-d104351ff093/2qRBMWaKjt.lottie",
    img: "https://picsum.photos/200/300",
    description: "Logistics and supply chain dashboard.",
    status: "Completed",
    link: "https://blogs.gwu.edu/isha-paliwal/2024/09/29/turning-pixels-into-art-building-an-ascii-art-generator-with-python/",
  },
  {
    title: "CrowdQuant: Advanced Computer Vision for Mall Traffic Analysis",
    gif: "https://lottie.host/db1b745d-9444-4de2-bfaf-7cac4d4d6f90/3zvDExrX7n.lottie",
    img: "https://picsum.photos/200/300",
    description: "Interactive blog and news portal.",
    status: "Completed",
    link: "https://blogs.gwu.edu/isha-paliwal/2024/10/21/crowdquant-advanced-computer-vision-for-mall-traffic-analysis/",
  },
  {
    title: "Angular Flight Booking Project",
    gif: "https://lottie.host/ff7c4f08-2b77-4442-9890-2155e02c4286/gmpWGQ1Z8X.lottie",
    img: "https://picsum.photos/200/300",
    description: "On-going SaaS platform for AI-driven analytics.",
    status: "Completed",
    link: "https://github.com/ishapaliwal/FlightBooking_Project_Angular",
  },
  {
    title: "Maps: Digital Playground and Tools",
    gif: "https://lottie.host/dab2ab28-5538-4bf7-9730-8d2aa2eb2640/3xn03OKn3x.lottie",
    img: "https://picsum.photos/200/300",
    description: "On-going SaaS platform for AI-driven analytics.",
    status: "Ongoing",
    link: "https://example.com",
  },
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
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

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h2>Projects</h2>
      <div className="projects-container normalText">
        {projects.map((project, index) => (
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
        Keep going! You're closer than you think. 🎯
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