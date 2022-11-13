/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwindcss"),
    require("autoprefixer"),

    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.4xl"),
        },
        h2: {
          fontSize: theme("fontSize.3xl"),
        },
        h3: {
          fontSize: theme("fontSize.2xl"),
        },
        h4: {
          fontSize: theme("fontSize.xl"),
        },
      });
      addComponents({
        ".card": {
          backgroundColor: theme("colors.white"),
          borderRadius: theme("borderRadius.lg"),
          padding: theme("spacing.6"),
          boxShadow: theme("boxShadow.xl"),
        },
      });
      addUtilities({
        ".containerCustom": {
          //
        },
      });
    }),
  ],
};
