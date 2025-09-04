/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["'Barlow Semi Condensed'", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        polygon: "url('/src/images/polygon.svg')",
        triangle: "url('/src/images/triangle.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
