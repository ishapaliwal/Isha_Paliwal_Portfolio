import React, { useState, useEffect } from "react";
import "../../styles/ThemeToggle.css";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      return savedMode === "true";
    }

    const now = new Date();
    const localHours = now.getHours();
    return localHours >= 18 || localHours < 5;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);

    document.body.style.backgroundImage = darkMode
      ? `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='87' height='50.232' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23212529ff'/><path d='M0 54.424l14.5-8.373c4.813 2.767 9.705 5.573 14.5 8.37l14.5-8.373V29.303M0 4.193v16.744l-14.5 8.373L0 37.68l14.5-8.374V12.562l29-16.746m43.5 58.6l-14.5-8.37v-33.49c-4.795-2.797-9.687-5.603-14.5-8.37m43.5 25.111L87 37.67c-4.795-2.797-24.187-13.973-29-16.74l-14.5 8.373-14.5-8.37v-33.489m72.5 8.365L87 4.183l-14.5-8.37M87 4.183v16.745L58 37.673v16.744m0-66.976V4.185L43.5 12.56c-4.795-2.797-24.187-13.973-29-16.74L0 4.192l-14.5-8.37m29 33.484c4.813 2.767 9.705 5.573 14.5 8.37V54.42'  stroke-linecap='square' stroke-width='1' stroke='%234b4a45ff' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`
      : `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='87' height='50.232' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23faefe6ff'/><path d='M0 54.424l14.5-8.373c4.813 2.767 9.705 5.573 14.5 8.37l14.5-8.373V29.303M0 4.193v16.744l-14.5 8.373L0 37.68l14.5-8.374V12.562l29-16.746m43.5 58.6l-14.5-8.37v-33.49c-4.795-2.797-9.687-5.603-14.5-8.37m43.5 25.111L87 37.67c-4.795-2.797-24.187-13.973-29-16.74l-14.5 8.373-14.5-8.37v-33.489m72.5 8.365L87 4.183l-14.5-8.37M87 4.183v16.745L58 37.673v16.744m0-66.976V4.185L43.5 12.56c-4.795-2.797-24.187-13.973-29-16.74L0 4.192l-14.5-8.37m29 33.484c4.813 2.767 9.705 5.573 14.5 8.37V54.42'  stroke-linejoin='round' stroke-linecap='round' stroke-width='1' stroke='%23e9e7ddff' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`;

    document.body.style.color = darkMode ? "#FFFFFF" : "#000000";

  }, [darkMode]);

  return (
    <label>
      <input 
        type="checkbox" 
        checked={darkMode} 
        onChange={() => setDarkMode(!darkMode)} 
      />

      <svg viewBox="0 0 100 45" width="100" height="50">
        <defs>
          <rect id="background" x="0" y="0" width="90" height="40" rx="20"></rect>

          <clipPath id="clip">
            <use href="#background"></use>
          </clipPath>

          <linearGradient id="gradient-light" x1="0" x2="0" y1="0" y2="1">
            <stop stopColor="#8bc8f2" offset="0"></stop>
            <stop stopColor="#fff" offset="1"></stop>
          </linearGradient>

          <filter id="blur-light">
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          </filter>

          <pattern id="pattern-light" width="0.1" height="1" viewBox="0 0 10 45">
            <path fill="#40b5f8" d="M 0 0 a 6 6 0 0 0 10 0 v 45 h -10 z"></path>
          </pattern>

          <linearGradient id="gradient-dark" x1="0" x2="0" y1="0" y2="1">
            <stop stopColor="#1F2241" offset="0"></stop>
            <stop stopColor="#7D59DF" offset="1"></stop>
          </linearGradient>

          <linearGradient id="gradient-mask" x1="0" x2="0" y1="0" y2="1">
            <stop stopColor="#000" offset="0"></stop>
            <stop stopColor="#fff" offset="1"></stop>
          </linearGradient>

          <mask id="mask-dark">
            <use fill="url(#gradient-mask)" href="#background"></use>
          </mask>

          <radialGradient id="gradient-moon">
            <stop stopColor="#fdfdfd" offset="0.7"></stop>
            <stop stopColor="#e2e2e2" offset="1"></stop>
          </radialGradient>

          <pattern id="pattern-dark" width="0.2" height="1" viewBox="0 0 20 45">
            <path fill="#fff" d="M 2 5 l 1 1 l -1 1 l -1 -1 l 1 -1"></path>
            <path fill="#fff" d="M 10 16 l 1 1 l -1 1 l -1 -1 l 1 -1"></path>
          </pattern>
        </defs>

        <g transform="translate(5 2.5)">
          <g clipPath="url(#clip)">
            <g className="dark">
              <use fill="url(#gradient-dark)" href="#background"></use>
              <g className="background" transform="translate(0 -40) scale(1 0.4)">
                <rect fill="url(#pattern-dark)" x="0" y="0" width="100" height="45"></rect>
              </g>
              <use mask="url(#mask-dark)" fill="url(#gradient-dark)" href="#background"></use>
            </g>
            <g className="light">
              <use fill="url(#gradient-light)" href="#background"></use>
              <g className="background" transform="translate(-30 -20)">
                <g transform="translate(30 20)">
                  <rect fill="url(#pattern-light)" x="-5" y="27.5" width="100" height="45"></rect>
                </g>
              </g>
            </g>
          </g>
        </g>

        <g transform="translate(77.5 22.5)">
          <g className="translate" transform="translate(-55)">
            <g className="rotate" transform="rotate(-100)">
              <g className="dark">
                <circle fill="url(#gradient-moon)" cx="0" cy="0" r="20.5"></circle>
              </g>
            </g>
            <g className="light">
              <circle fill="#FFD21F" cx="0" cy="0" r="21" filter="url(#blur-light)"></circle>
              <circle fill="#FFD21F" cx="0" cy="0" r="20.5"></circle>
            </g>
          </g>
        </g>
      </svg>
    </label>
  );
};

export default ThemeToggle;