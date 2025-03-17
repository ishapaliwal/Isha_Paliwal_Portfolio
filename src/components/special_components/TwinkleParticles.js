import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";

function TwinkleParticles() {
  const [primaryColor, setPrimaryColor] = useState("#d46bca");
  const [secondaryColor, setSecondaryColor] = useState("#fd883d");
  const [animationMainColor, setAnimationMainColor] = useState("#f1f1f1");

  useEffect(() => {
    const fetchColors = () => {
      const rootStyles = getComputedStyle(document.body);
      console.log(rootStyles);
      setPrimaryColor(
        rootStyles
          .getPropertyValue("--primary-color")
          .trim() || "#d46bca"
      );
      setSecondaryColor(
        rootStyles
          .getPropertyValue("--secondary-color")
          .trim() || "#fd883d"
      );
      setAnimationMainColor(
        rootStyles
          .getPropertyValue("--animation-main-color")
          .trim() || "#f1f1f1"
      );
    };

    fetchColors();

    window.addEventListener("themeChange", fetchColors);

    return () => {
      window.removeEventListener("themeChange", fetchColors);
    };
  }, []);

  return (
    <Particles
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              area: 900,
            },
          },
          color: {
            value: [animationMainColor, primaryColor, secondaryColor],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              opacity_min: 0.5,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 1.8,
              size_min: 1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: animationMainColor,
            opacity: 0.1,
            width: 0.8,
          },
          move: {
            enable: true,
            speed: 10,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.2,
              opacity: 0.8,
              color: [primaryColor, secondaryColor],
            },
            lines: {
              enable: true,
              frequency: 0.002,
              opacity: 0.15,
              color: primaryColor,
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 0.8,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.6,
              speed: 2.5,
            },
            repulse: {
              distance: 220,
              duration: 0.5,
            },
            push: {
              particles_nb: 3,
            },
            remove: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
        fps_limit: 60,
      }}
    />
  );
}

export default TwinkleParticles;