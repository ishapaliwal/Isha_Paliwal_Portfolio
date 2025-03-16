import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Game from "../special_components/Game";

function Contact() {
    return ( 
        <div>
            {/* <h1>Contact</h1>
            <DotLottieReact src="https://lottie.host/0ac39725-1069-434b-83b5-c0ead6423ce5/LzFDffGG0f.lottie" loop autoplay />
            <p>Congratulations, you have reached the end!! Click to view the prize</p>
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
                </div> */}
                <Game />
        </div>
    );
}

export default Contact;