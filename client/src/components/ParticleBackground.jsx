import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    // Load the tsParticles bundle
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 100,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 2,
          },
          links: {
            enable: true,
            distance: 150,
          },
        },
      }}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default ParticleBackground;
