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
        p: { fontFamily: theme("Cabin") },
        h1: { fontFamily: theme("Montserrat") },
        h2: { fontFamily: theme("Montserrat") },
        h3: { fontFamily: theme("Montserrat") },
      });
      return true;
    }),
  ],
  daisyui: {
    //daisy can only use these variables! https://daisyui.com/docs/colors/
    themes: [
      {
        moz_ai_guide_base: {
          primary: "#0F253A", // blue
          "primary-content": "#FCFBF6",
          "primary-focus": "#204D79",
          "base-content": "#0F253A",
          "base-100": "#FCFBF6",
          "base-200": "#6E7B85",
          "base-300": "#A7ACB9",
          info: "#A4E9FF",
          "info-content": "#D9F0F8",
          success: "#37D399",
          "success-content": "#87FBD1",
          warning: "#FCBC23",
          error: "#F87272",
          "error-content": "#000",
          "interaction-inactive": "#A9B2B2",
        },
        moz_ai_guide_base_dark: {
          primary: "#0F253A", // blue
          "primary-content": "#FCFBF6",
          "primary-focus": "#204D79",
          "base-content": "#0F253A",
          "base-100": "#FCFBF6",
          "base-200": "#6E7B85",
          "base-300": "#A7ACB9",
          info: "#A4E9FF",
          "info-content": "#D9F0F8",
          success: "#37D399",
          "success-content": "#87FBD1",
          warning: "#FCBC23",
          error: "#F87272",
          "error-content": "#000",
          "interaction-inactive": "#A9B2B2",
        },
      },
    ],
  },
};
