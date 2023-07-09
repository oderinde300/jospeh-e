/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "856px",
      // => @media (min-width: 768px) { ... }

      mmd: "945px",
      // => @media (min-width: 945px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        // "hero-bg": "url('/src/app/assets/imgs/Hero-Bg-tiny.png')",
        "hero-bg":
          "url('https://res.cloudinary.com/emmatobiloba/image/upload/v1686848246/joseph/HeroBg_pmqzri.png')",
      },
      colors: {
        "primary-gray-1": "#262626",
        "primary-gray-2": "#121212",
        "primary-gray-3": "#8C8C8C",
        "primary-blue-1": "#03E8E8",
        "primary-blue-2": "#BAFEFE",
      },
    },
    fontFamily: {
      // Poppins: ["Poppins", "sans-serif"],
      Rubik: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
};
