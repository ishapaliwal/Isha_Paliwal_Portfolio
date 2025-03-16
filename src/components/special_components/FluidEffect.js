import React, { useEffect, useRef } from "react";

const FluidEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    let hue = 0;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10 + 5;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${hue}, 100%, 50%)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.98;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function handleMouseMove(event) {
      hue += 2;
      particles.push(new Particle(event.clientX, event.clientY));
    }

    function animate() {

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.size < 1) {
          particles.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh" }} />;
};

export default FluidEffect;