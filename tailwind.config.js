/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  mode:"jit",
  theme: {
    extend: {
      colors:{
        primary:"#ffa45c",
        secondary: "#36454F",
        accent: "#FDCC49",
        grey: "#ededed",
        "dark-primary" : "e9883b",
        "opaque-black": "rgba(0.0.0.0.35)"
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content:{
        person1: "url('https://preview.colorlib.com/theme/winkel/images/person_1.jpg.webp')",
        person2: "url('https://preview.colorlib.com/theme/winkel/images/person_2.jpg.webp')",
        person3: "url('https://preview.colorlib.com/theme/winkel/images/person_4.jpg.webp')",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      }      
    },
  },
  plugins: [require('flowbite/plugin')],
}

