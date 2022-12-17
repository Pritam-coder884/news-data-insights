/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#1869F0",
      secondary: "#0AB68B",
      disabled: "#BFD8FF",
      blue: "#DCF7FA",
      process: "#FFC542",
      error: "#FC5A5A",
      success: "#3DD598",
      pink: "#FF9AD5",
      yellow: "#FCF1D7",
      red: "#FCE3E3",
      green: "#CCFFEB",
      white: "#FFFFFF",
      btnDisable: "#B5B5BE",
      gray: {
        100: "#FFFFFF",
        200: "#FAFAFB",
        300: "#F1F1F5",
        400: "#DFE0E0",
        500: "#727272",
        600: "#44444F",
        700: "#111120",
        800: "#909090",
        900: "#373F41",
      },
    },
    screens: {
      xxl: { max: "1980px" },

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "790px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xsm: { max: "310px" },
    },

    fontFamily: {
      sergio:
        "  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      poppins: " 'Poppins', sans-serif",
    },

    extend: {},
  },
  plugins: [],
};
