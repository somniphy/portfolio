/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "text-gradient": "text 5s linear infinite",
        "infinite-slider" : "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%":{ transform: "translateX(0)"},
          "100%": {
            transform: "translateX(calc(-200px * 5))",
          },
        },
        text: {
          to: {
            backgroundPosition: "200% center",
          },
        },
      },
    },
  },

  plugins: [],
};
