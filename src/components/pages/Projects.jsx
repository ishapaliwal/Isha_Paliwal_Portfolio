import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Dialog,
  DialogContent,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../../styles/Projects.css";

const projects = [
  {
    title: "Hip Image",
    img: "https://lottie.host/b5650ec5-fd09-4878-a7e5-613c72b2acd2/R9kvFAVgtX.lottie",
    description: "A modern photography website.",
    status: "Completed",
    link: "https://example.com",
  },
  {
    title: "Chatwal Lane",
    img: "https://lottie.host/6aa18644-1fe3-4a85-b031-7bd8875c7565/JLvObOJDBh.lottie",
    description: "E-commerce store for custom jewelry.",
    status: "Completed",
    link: "https://example.com",
  },
  {
    title: "Embury West",
    img: "https://lottie.host/d7cda788-121d-4c2a-8ecb-9b95d8b4edd3/ZEtztg8ssc.lottie",
    description: "A joyful website for a legal firm.",
    status: "Completed",
    link: "https://example.com",
  },
  // {
  //   title: "Briabby",
  //   img: "https://lottie.host/4d40e2a1-95bb-4c15-9fcb-8f9bb0dfd6ac/2WxB3YAYZ7.lottie",
  //   description: "Educational platform for kids.",
  //   status: "Completed",
  //   link: "https://example.com",
  // },
  {
    title: "MMRN",
    img: "https://lottie.host/e8442322-4054-4db2-bd10-728e0d3d9c6a/ZWEkAi5fwJ.lottie",
    description: "Medical research network system.",
    status: "Completed",
    link: "https://example.com",
  },
  {
    title: "Trade Winds",
    img: "https://lottie.host/cb2eef77-dd1d-4647-a962-d104351ff093/2qRBMWaKjt.lottie",
    description: "Logistics and supply chain dashboard.",
    status: "Completed",
    link: "https://example.com",
  },
  // {
  //   title: "Linkletter",
  //   img: "https://lottie.host/db1b745d-9444-4de2-bfaf-7cac4d4d6f90/3zvDExrX7n.lottie",
  //   description: "Interactive blog and news portal.",
  //   status: "Completed",
  //   link: "https://example.com",
  // },
  // {
  //   title: "Comrie Boudreau",
  //   img: "https://lottie.host/ff7c4f08-2b77-4442-9890-2155e02c4286/gmpWGQ1Z8X.lottie",
  //   description: "On-going SaaS platform for AI-driven analytics.",
  //   status: "Ongoing",
  //   link: "https://example.com",
  // },
  // {
  //   title: "Comrie Boudreau",
  //   img: "https://lottie.host/e1beaa30-a610-499c-9a53-8af70ccb76a3/6csBekHSNx.lottie",
  //   description: "On-going SaaS platform for AI-driven analytics.",
  //   status: "Ongoing",
  //   link: "https://example.com",
  // },
  // {
  //   title: "Comrie Boudreau",
  //   img: "https://lottie.host/3ce0bb5f-d553-4475-8ebc-94357fa3233a/6glNmgKkqg.lottie",
  //   description: "On-going SaaS platform for AI-driven analytics.",
  //   status: "Ongoing",
  //   link: "https://example.com",
  // },
  // {
  //   title: "Comrie Boudreau",
  //   img: "https://lottie.host/dab2ab28-5538-4bf7-9730-8d2aa2eb2640/3xn03OKn3x.lottie",
  //   description: "On-going SaaS platform for AI-driven analytics.",
  //   status: "Ongoing",
  //   link: "https://example.com",
  // },
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimationLoaded(true), 1000);
  }, []);

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
                  <DotLottieReact src={project.img} loop autoplay />
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
                  <DotLottieReact src={selectedProject.img} loop autoplay />
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

export default Projects;