/** @type {import('tailwindcss').Config} */

/** Tailwind is just for the AI Guide */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')


module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./templates/base-ai.html",
    "./templates/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {},
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    // base
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontFamily: theme("Space Grotesk") },
        h2: { fontFamily: theme("Space Grotesk") },
        h3: { fontFamily: theme("Space Grotesk") },
      });
      return true;
    }),
  ],
  daisyui: {
    themes: [
      {
        moz_ai_guide_base: {
          primary: "#BC41BC", // pink
          "primary-focus": "#BC41BC", // purple
          "primary-content": "#fff",
          secondary: "#4579FF", // blue
          "secondary-color": "#000",
          accent: "#73FDAF", // green
          neutral: "#141414", // dark gray
          "neutral-content": "#fff",
          "base-100": "#fff",
          "base-100-content": "#000",
          info: "#00B6F3", // light blue
          success: "#00CD91", // turqouise
          warning: "#FFB637", //dark yellow
          error: "#FF676A", // pink-red
        },
        moz_ai_guide_base_dark: {
          primary: "#FF85FF", //pink
          secondary: "#73FDAF", //green
          accent: "#4579FF", //blue
          neutral: "#141414", //dark gray
          "neutral-content": "#fff",
          "base-100": "#141414",
          "base-100-content": "#fff",
          info: "#00B6F3",
          success: "#00CD91",
          warning: "#FFB637",
          error: "#FF676A",
        },
      },
      "dark",
      "cyberpunk",
    ],
  },
};
