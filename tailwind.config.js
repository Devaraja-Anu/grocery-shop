/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBackground: '../src/assets/heroBg.png',
      },
      colors: {
        main: "#253D4E",
        grey: "#838383",
        green: "#3BB77E",
      },
      fontFamily: {
        main: ["Quicksand"],
      },
      height: {
        card: "432px",
      },
    },
  },
  plugins: [],
};
