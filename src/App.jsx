import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/Theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TwinkleParticles from "./components/special_components/TwinkleParticles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./components/pages/LandingPage";
import AboutMe from "./components/pages/AboutMe";
import Education from "./components/pages/Education";
import Experience from "./components/pages/Experience";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import { ThemeProvider } from "./components/special_components/ApplyTheme";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <TwinkleParticles />
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;