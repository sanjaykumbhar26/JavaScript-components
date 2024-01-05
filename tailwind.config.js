/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "340px",
      xs: "380px",
      sm: "576px",
      md: "768px",
      lg: "1180px",
      xl: "1338px",
    },
    extend: {
      colors: {
        darkBlack: "#101828",
        darkWhite: "#FAFAFA",
        blue: "#4DA1FB",
        darkblue: "#093568",
        rgbblur: "rgba(77, 161, 251, 0.20)",
        lightblur: "#DBECFE",
        gray: "#667085",
        lightgray: "#EAECF0",
        green: "#15803D",
        darkgreen:'#90C66F',
        lightgreen: "rgba(144, 198, 111, 0.20)",
        
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      fontSize: {
        sm: ["14px"],
        md: ["16px"],
      },
      spacing: {
        26: "6.25rem",
        10: "2.5rem",
      },
      boxShadow: {
        navbar: "0px 4px 6px -2px rgba(16, 24, 40, 0.03)"
      },
      dropShadow: {
        '3xl': '0px 3.1337px 127.698px rgba(0, 64, 122, 0.19)',
      },
      backgroundImage: {
        'hero-pattern': "url('../images/hero-banner.svg')",
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
