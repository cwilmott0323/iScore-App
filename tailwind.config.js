/** @type {DefaultColors} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",'./pages/**/*.{html,js}','./components/**/*.{html,js}'],
  theme: {
    extend: {
    }
  },
  plugins: [
    require('tailwindcss-text-border'),
  ],
}
