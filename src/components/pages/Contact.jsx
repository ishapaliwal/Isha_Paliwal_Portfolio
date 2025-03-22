import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Game from "../special_components/Game";
import { Link } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../../styles/Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const headingStyle = { textAlign: "center" };
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        "service_sx1ybn5",
        "template_itbpdvm",
        formData,
        "OfCP1OR3DHPyk6tfk"
      )
      .then(() => {
        alert("Message sent successfully!");
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch(() => alert("Failed to send message."));
  };

  return (
    <div className="contact-container normalText">
      <div className="progressBar">
        {animationLoaded ? (
          <DotLottieReact
            src="https://lottie.host/0ac39725-1069-434b-83b5-c0ead6423ce5/LzFDffGG0f.lottie"
            autoplay
          />
        ) : (
          <p>Loading animation...</p>
        )}
      </div>

      <div className="progressBarTagline normalText">
        Congratulations, you've made it to the end! Scroll down to unveil your
        prize!
      </div>

      <br />

      <h2 className="contact-heading mb-3" style={headingStyle}>
        Contact Me
      </h2>
      <br />
      <div className="contact-content container">
        <div className="row">
          <div className="contact-details col-md-6 mb-3">
            <p>
              <strong>Email:</strong> isha.paliwal11@gmail.com
            </p>
            <p>
              <strong>LinkedIn:&nbsp;</strong>
              <Link
                href="https://www.linkedin.com/in/isha-paliwal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/isha-paliwal/
              </Link>
            </p>
            <p>
              <strong>GitHub:&nbsp;</strong>
              <Link
                href="https://github.com/ishapaliwal"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/ishapaliwal
              </Link>
            </p>
            <p>
              <a
                href="/assets/Isha_Paliwal_Final_Resume.pdf"
                download="Isha_Paliwal_Resume.pdf"
                className="download-resume-button"
              >
                <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/dusk/28/resume.png"
                  alt="resume"
                />
                &nbsp;Download My Resume
              </a>
            </p>
          </div>

          <div className="contact-form col-md-6 mb-3">
            {!submitted ? (
              <form className="form-container mb-3" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  className="form-control mb-3"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-control mb-3"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  className="form-control mb-3"
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="download-resume-button">
                  SEND MESSAGE{" "}
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/fluency/28/filled-sent.png"
                    alt="filled-sent"
                  />
                </button>
              </form>
            ) : (
              <p className="success-message">
                Thank you! Your message has been sent.
              </p>
            )}
          </div>
        </div>
      </div>

      <Game />

      {showScrollArrow && (
        <div className="scroll-down" onClick={scrollByView}>
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </div>
      )}
    </div>
  );
}

export default Contact;