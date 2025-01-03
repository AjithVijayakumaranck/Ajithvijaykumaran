/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#EEEEED",
        primaryOrange:"#ff6000",
        secondary:"#404040",
        secondaryOrange:"#581d00",
      },
      fontFamily:{
        bebas:"Bebas Neue",
        secondary:"Geologica"
      },
      backgroundImage: {
        wave: "url('/assets/svgs/orange-fill.svg ')",
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-reverse": "spin-reverse 40s linear infinite",
      },

    },
  },
  plugins: [],
}

