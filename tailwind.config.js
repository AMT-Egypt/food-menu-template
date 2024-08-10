/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#468585", // background color
        secondary: "#50B498",
        third: "#9CDBA6",
        fourth: "#DEF9C4"
      },
      fontFamily: {
        primary: ["Playwrite HU", "cursive"],
        secondary: ["Cairo", "sans-serif"]
      }
    },
  },
  plugins: [],
}

