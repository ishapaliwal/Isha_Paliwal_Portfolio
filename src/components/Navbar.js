import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LinkIcon from '@mui/icons-material/Link';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Face2Icon from '@mui/icons-material/Face2';
import TerminalIcon from '@mui/icons-material/Terminal';
import FeedIcon from '@mui/icons-material/Feed';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import { Tooltip } from '@mui/material';
import ThemeToggle from './special_components/ThemeToggle';


function NavBar() {
  const [scrolling, setScrolling] = useState(false);

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
    <Navbar expand="lg" className={`navbar-effects ${scrolling ? "scrolled" : ""}`} fixed="top">
      <Container>
        <Navbar.Brand href="/">Isha Paliwal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about"><Face2Icon className="iconMiddle"></Face2Icon>About Me</Nav.Link>
            <Nav.Link href="/education"><SchoolIcon className="iconMiddle"></SchoolIcon>Education</Nav.Link>
            <Nav.Link href="/experience"><WorkIcon className="iconMiddle"></WorkIcon>Experience</Nav.Link>
            <Nav.Link href="/projects"><TerminalIcon className="iconMiddle"></TerminalIcon>Projects</Nav.Link>
            <Nav.Link href="/resume"><FeedIcon className="iconMiddle"></FeedIcon>Resume</Nav.Link>
            <Nav.Link href="/feedback"><FeedbackIcon className="iconMiddle"></FeedbackIcon>Client Feedback</Nav.Link>
            <Nav.Link href="/contact"><ContactEmergencyIcon className="iconMiddle"></ContactEmergencyIcon>Contact</Nav.Link>
            <Nav.Link as="a" href="https://github.com/ishapaliwal/Isha_Paliwal_Portfolio" target="_blank" ><Tooltip title="Portfolio Github Link"><LinkIcon></LinkIcon></Tooltip></Nav.Link>
          </Nav>
          <ThemeToggle />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;