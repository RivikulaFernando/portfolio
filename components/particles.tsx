import React, { useCallback } from "react";
import dynamic from 'next/dynamic';
import { useParticleContext } from "./context";
import type { Engine } from "tsparticles-engine";

// Dynamically import Particles to reduce initial load
const Particles = dynamic(() => import("react-tsparticles").then((mod) => mod.default), {
  ssr: false, // Disable server-side rendering
  loading: () => <div className="absolute inset-0 -z-10"></div>,
});

// Import the slim version normally - don't try to dynamic import it
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { invertParticles, isTransitioning } = useParticleContext();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Reduce particle count and complexity to improve performance
  return (
    <div className={`absolute inset-0 -z-10 transition-colors duration-1000 ease-in-out ${invertParticles ? 'bg-white' : 'bg-transparent'}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 30, // Lower FPS for better performance
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10
                }
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              }
            },
          },
          particles: {
            color: {
              value: invertParticles ? "#000000" : "#ffffff",
            },
            links: {
              color: invertParticles ? "#000000" : "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1, 
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: false, // Turned off to save memory
        }}
        className="transition-opacity duration-1000 ease-in-out"
        style={{ 
          opacity: isTransitioning ? 0.6 : 1
        }}
      />
    </div>
  );
};

export default ParticlesBackground;