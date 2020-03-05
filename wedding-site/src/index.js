import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Particles from "react-particles-js";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
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
  </React.StrictMode>,
  rootElement
);
