/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('https://tecdn.b-cdn.net/img/new/slides/146.webp')"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

