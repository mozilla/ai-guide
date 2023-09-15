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
          primary: "#4579FF",
          "primary-content": "#fff",
          secondary: "#ff85ff",
          "secondary-color": "#000",
          accent: "#73fdaf",
          neutral: "#141414",
          "neutral-content": "#fff",
          "base-100": "#fff",
          "base-100-content": "#000",
          info: "#00B6F3",
          success: "#00CD91",
          warning: "#FFB637",
          error: "#FF676A",
        },

        moz_ai_guide_dark: {
          primary: "#4579FF",
          secondary: "#ff85ff",
          accent: "#73fdaf",
          neutral: "#141414",
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
