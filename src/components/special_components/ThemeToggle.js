import React from "react";
import "../../styles/ThemeToggle.css";
import { useTheme } from "../special_components/ApplyTheme"

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <label>
      <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />

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