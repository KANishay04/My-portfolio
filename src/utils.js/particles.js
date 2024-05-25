// particlesConfig.js

export const particlesConfig = {
  background: {
    color: {
      value: "transparent", // Set the background color to transparent
    },
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"], // Array of different colors
    },
    links: {
      enable: false, 
    },
    move: {
      enable: true,
      speed: 1, 
      direction: "none", 
      random: true, 
      straight: false, 
      outModes: {
        default: "out", 
      },
    },
    number: {
      value: 50, // Number of particles (flowers)
      density: {
        enable: true,
        value_area: 800, // Adjust the density of particles
      },
    },
    opacity: {
      value: 1, // Set opacity to 1 (fully opaque)
    },
    shape: {
      type: "image", // Set particle shape to image
      image: {
        src: "f2.png", // Path to the flower image
        width: 100, // Set width of the flower
        height: 100, // Set height of the flower
      },
    },
    size: {
      value: 50, // Set particle size (diameter of the flowers)
    },
  },
  detectRetina: true,
};
