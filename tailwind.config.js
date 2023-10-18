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
          primary: "0F253A",
          "primary-hover": "14314D",
          "primary-focus": "204D79",
          "primary-content": "#ffffff",
          "base-content": "0F253A",
          "base-100": "FCFBF6",
          "base-200": "6E7B85",
          "base-300": "6E7B85",
          "info": "3AC0F8",
          "info-content": "000000",
          "warning": "FCBC23",
          "warning-content": "000000",
          "success": "37D399",
          "success-content": "000000",
          "error": "F87272",
          "interaction-inactive": "A9B2B2",
          "border": "A7ACB9",
        },
        moz_ai_guide_old_base: {
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
          "base-200": "#fff", //medium gray
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
          "base-200": "#363F4A", //medium gray
          info: "#00B6F3",
          success: "#00CD91",
          warning: "#FFB637",
          error: "#FF676A",
        },
      },
      "dark",
    ],
  },
};
