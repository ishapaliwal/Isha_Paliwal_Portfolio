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
    img: "https://picsum.photos/400/250",
    description: "A modern photography website.",
    status: "Completed",
    link: "https://example.com",
  },
  {
    title: "Chatwal Lane",
    img: "https://picsum.photos/400/250",
    description: "E-commerce store for custom jewelry.",
    status: "Completed",
    link: "https://example.com",
  },
  {
    title: "Embury West",
    img: "https://picsum.photos/400/250",
    description: "A joyful website for a legal firm.",
    status: "Completed",
    link: "https://example.com",
  },
  {
    title: "Briabby",
    img: "https://picsum.photos/400/250",
    description: "Educational platform for kids.",
    status: "Completed",
    link: "https://example.com",
  },
  {
    title: "MMRN",
    img: "https://picsum.photos/400/250",
    description: "Medical research network system.",
    status: "Completed",
    link: "https://example.com",
  },
  {
    title: "Trade Winds",
    img: "https://picsum.photos/400/250",
    description: "Logistics and supply chain dashboard.",
    status: "Completed",
    link: "https://example.com",
  },
  {
    title: "Linkletter",
    img: "https://picsum.photos/400/250",
    description: "Interactive blog and news portal.",
    status: "Completed",
    link: "https://example.com",
  },
  {
    title: "Comrie Boudreau",
    img: "https://picsum.photos/400/250",
    description: "On-going SaaS platform for AI-driven analytics.",
    status: "Ongoing",
    link: "https://example.com",
  },
  {
    title: "Comrie Boudreau",
    img: "https://picsum.photos/400/250",
    description: "On-going SaaS platform for AI-driven analytics.",
    status: "Ongoing",
    link: "https://example.com",
  },
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
            <Card
            className={`project-card shape-${index + 1}`}
            onClick={() => handleOpen(project)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={project.img}
                alt={project.title}
                className="project-image"
              />
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
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="dialog-image"
                />
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