import React from "react";
import Particles from "react-tsparticles";

function TwinkleParticles() {
  return (
    <Particles
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0
        },
        particles: {
          number: {
            value: 90,  // Slightly reduced particles for less clutter
            density: {
              enable: true,
              area: 900
            }
          },
          color: {
            value: ["#ffffff", "#d46bca", "#fd883d"]  // White, red, and yellow for twinkle variety
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.6,  // More transparency
            random: true,
            anim: {
              enable: true,
              speed: 2,  // Slower twinkle
              opacity_min: 0.5,  // Lower opacity for more transparency
              sync: false
            }
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 1.8,
              size_min: 1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: "#ffffff",
            opacity: 0.1,
            width: 0.8
          },
          move: {
            enable: true,
            speed: 10,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out"
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.2,
              opacity: 0.8,
              color: ["#d46bca", "#fd883d"]
            },
            lines: {
              enable: true,
              frequency: 0.002,
              opacity: 0.15,
              color: "#d46bca"
            }
          }
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 0.8
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.6,
              speed: 2.5
            },
            repulse: {
              distance: 220,
              duration: 0.5
            },
            push: {
              particles_nb: 3
            },
            remove: {
              particles_nb: 1
            }
          }
        },
        retina_detect: true,
        // background: {
        //   color: {
        //     value: "#faefe6"
        //   }
        // },
        fps_limit: 60
      }}
    />
  );
}

export default TwinkleParticles;
