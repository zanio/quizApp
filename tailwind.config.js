const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Gilray"', "sans-serif"]
        // sans: ['"PT Sans"', 'sans-serif']
      },
      spacing: {
        "128": "32rem",
        "144": "36rem"
      },
      borderRadius: {
        br: "0.625rem"
      }
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    colors: {
      gray: colors.coolGray,
      blue: "#0AAFF6",
      green: "#1ACD82",
      pink: colors.fuchsia,
      primary: "#0D8F97",
      secondary: "#F9FBFD",
      white: "#ffffff",
      fancy: "#EA5566"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};