import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Game from "../special_components/Game";

function Contact() {
  const [animationLoaded, setAnimationLoaded] = useState(false);
  
    useEffect(() => {
      setTimeout(() => setAnimationLoaded(true), 1000);
    }, []);

  return (
    <div>
      <div>
        <h1>Contact</h1>
        <div className="form-page">
          <form className="form-container">
            <h2>Contact Us</h2>
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />

            <label>Message:</label>
            <textarea placeholder="Your message"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <Game />
      <div className="progressBar">
              {animationLoaded ? (
                <DotLottieReact
                  src="https://lottie.host/0ac39725-1069-434b-83b5-c0ead6423ce5/LzFDffGG0f.lottie"
                  loop
                  autoplay
                />
              ) : (
                <p>Loading animation...</p>
              )}
            </div>
            <div className="progressBarTagline normalText">
            🎉 Congratulations, you've made it to the end! 🎉 Click below to unveil your prize! 🎁✨
            </div>
    </div>
  );
}

export default Contact;