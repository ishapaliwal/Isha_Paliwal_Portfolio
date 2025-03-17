import React, { useState, useEffect } from "react";
import { useTheme } from "./special_components/ApplyTheme";
import { Tooltip } from "@mui/material";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  const [scrolling, setScrolling] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`footer-effects ${scrolling ? "scrolled" : ""} ${
        darkMode ? "dark-theme" : "light-theme"
      }`}
    >
      <div>A pixel-perfect masterpiece by &copy; Isha Paliwal 🎨 🚀</div>
      <div className="footer-links">
        <span>
          <Tooltip title="LinkedIn" placement="top">
            <Link
              href="https://www.linkedin.com/in/isha-paliwal/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <LinkedInIcon></LinkedInIcon>
            </Link>
          </Tooltip>
        </span>
        <span>
          <Tooltip title="GitHub" placement="top">
            <Link
              href="https://github.com/ishapaliwal"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <GitHubIcon></GitHubIcon>
            </Link>
          </Tooltip>
        </span>
        <span>
          <Tooltip title="Blog" placement="top">
            <Link
              href="https://blogs.gwu.edu/isha-paliwal/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <SpeakerNotesIcon></SpeakerNotesIcon>
            </Link>
          </Tooltip>
        </span>
        <span>
          <Tooltip title="Instagram" placement="top">
            <Link
              href="https://www.instagram.com/travel_o__phile"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <InstagramIcon></InstagramIcon>
            </Link>
          </Tooltip>
        </span>
        <span>
          <Tooltip title="Pinterest" placement="top">
            <Link
              href="https://in.pinterest.com/ishapaliwal/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <PinterestIcon></PinterestIcon>
            </Link>
          </Tooltip>
        </span>
        <span>
          <Tooltip title="Gmail" placement="top">
            <Link
              href="mailto:isha.paliwal11@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <EmailIcon></EmailIcon>
            </Link>
          </Tooltip>
        </span>
      </div>
    </footer>
  );
}

export default Footer;