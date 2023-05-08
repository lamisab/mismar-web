/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    variants: ["active", "group-hover", "hover", "focus"],
    extend: {
      colors: {
        backgroundColor: "#F8F8F8",
        navBarColor: "#FFFFFF",
        sideBarColor: "#333333",
        mainColor: "#FF0000",
        containerColorGreen: "#C2DFC2",
        containerColorRed: "#F39471",
        containerColorBlue: "#B7DBF6",
        fontColorWhite: "#FFFFFF",
        fontColorGreen: "#339533",
        fontColorBlue: "#188AE2",
      },
    },
    fontFamily: {
      headlins: ["IBM Plex Sans Arabic", "sans-serif"],
    },
    screens: {
      mobile: { max: "767px" },
      tablet: { min: "768px", max: "1023px" },
      laptop: { min: "1024px", max: "1279px" },
      largeLaptop: { min: "1280px", max: "1535px" },
      desktop: { min: "1536px" },
    },
  },
  plugins: [],
};
