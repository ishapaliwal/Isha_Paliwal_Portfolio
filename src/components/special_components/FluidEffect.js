import React, { useEffect } from 'react';
import webglFluid from 'webgl-fluid';
import "../../styles/FluidEffect.css";

const FluidEffect = () => {
  useEffect(() => {
    if (typeof webglFluid === 'function') {
      webglFluid(document.querySelector('canvas'), {
        TRANSPARENT: true,
        IMMEDIATE: false,
        TRIGGER: 'hover',
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 2,
        VELOCITY_DISSIPATION: 1,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 4,
        CURL: 4,
        SPLAT_RADIUS: 0.9,
        SPLAT_FORCE: 5500,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 3,
        PAUSED: false,
        BACK_COLOR: { r: 10, g: 10, b: 10 },
        BLOOM: false,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.8,
        BLOOM_THRESHOLD: 0.6,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: false,
        SUNRAYS_RESOLUTION: 64,
        SUNRAYS_WEIGHT: 0.5
      });
    } else {
      console.error("webglFluid is not a function. Check the import.");
    }
  }, []);

  return <canvas className="fluid-effect-canvas" />;
};

export default FluidEffect;