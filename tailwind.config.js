module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        bounce: "bounce 2s infinite",
        slideIn: "slideIn 1.5s ease-out",
        pulse: "pulse 2s infinite",
        scaleUp: "scaleUp 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateX(-50%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        scaleUp: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

