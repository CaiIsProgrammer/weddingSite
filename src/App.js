import React from "react";
import "./styles.css";
import DateCountdown from "react-date-countdown-timer";
import Particles from "react-particles-js";
export default function App() {
  return (
    <div className="App">
      <h1>Count down to wedding</h1>
      <DateCountdown dateTo="June 1, 2020 00:00:00" />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 500,
                density: {
                  enable: false
                }
              },
              shape: {
                type: ["images", "circle"],
                images: [
                  {
                    src: "/heart.svg",
                    height: 500,
                    width: 500
                  }
                ]
              },
              color: {
                value: "#CCC"
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 1
                }
              },
              line_linked: {
                enable: false
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out"
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                }
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0
                },
                repulse: {
                  distance: 400,
                  duration: 4
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
}
