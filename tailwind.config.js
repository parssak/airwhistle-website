const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        futura: ["futura-pt", ...defaultTheme.fontFamily.sans],
        elza: ["elza-text", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        accent: {
          darkest: "#63656A",
          dark: "#90a4ae",
          DEFAULT: "#ec7615",
          hover: "#ED8C5F",
          light: "#ec76151A",
          light_hover: "#ec76151A",
          lightest: "#fafafa"
        },
        awm: {
          red: "#CC3022",
          "red-75": "#DA6459",
          "red-50": "#E69991",
          "red-25": "#F2CBC7",
          navy: "#0B263A",
          "navy-75": "#465D6C",
          "navy-50": "#84929C",
          "navy-25": "#C9D2D9",
          green: "#509872",
          "green-75": "#7DB195",
          "green-50": "#A8CBB9",
          "green-25": "#D3E5DB",
          white: "#E8EAE5",
          "white-75": "#EEEFEC",
          "white-50": "#F4F5F2",
          "white-25": "#F9F9F8",
          yellow: "#F6AA1D",
          "yellow-75": "#F9BF56",
          "yellow-50": "#FBD68F",
          "yellow-25": "#FDF2E0",
          black: "#2E2E2E",
          placeholder: "#C4C4C4"
        }
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio")
  ]
};
