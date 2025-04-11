import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useParticleContext } from "./context";

const ParticlesBackground: React.FC = () => {
  const { invertParticles, isTransitioning } = useParticleContext();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

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
          fpsLimit: 60,
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
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              grab: {
                distance: 100,
                links: {
                  opacity: 0.8
                }
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
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.3,
                sync: false
              }
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
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