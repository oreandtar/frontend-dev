/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode:'class',
  theme: {
    
    extend: {
      fontSize: {
      sm: '0.78rem',
      base: '1rem',
      xl: '1.25rem',
    }
    },
  },
  plugins: [],
}
