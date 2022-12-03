/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        lightShadow: " -3px -3px 7px #ffffff, 3px 3px 5px #ceced1",
        darkShadow: " 3px 3px 5px #1b1a1a, -3px -3px 5px #2b2b2b",
        insetShadow: "inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1",
        darkInsetShadow:
          "inset -3px -3px 7px #393939, inset 3px 3px 5px #181818",
      },
    },
    fontFamily: {
      sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      ubutu: ["Ubuntu", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwindcss"),
    require("autoprefixer"),
    require('tailwind-scrollbar-hide'),

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
          boxShadow: "-8px 8px 16px #bebebe,8px -8px 16px #ffffff",
        },
      });
      addUtilities({
        ".containerCustom": {},

        ".gap": {
          paddingTop: "55px",
          paddingBottom: "55px",
        },
        ".instagram": {
          background:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
        },
        ".lightBg": {
          backgroundImage:
            "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,229,168,1) 0%, rgba(251,174,222,1) 100.7% )",
        },

        ".darkBg": {
          backgroundImage:
            " radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,130,159,1) 0%, rgba(103,56,96,1) 90% )",
        },
      });
    }),
  ],
};
