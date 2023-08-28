/** @type {import('tailwindcss').Config} */

const forms = require('@tailwindcss/forms');
const scroll_bar = require('@gradin/tailwindcss-scrollbar');

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

    },

    container: {
      center: true,
    },
    fontFamily: {
      body: ['Poppins']
    }
  },
  plugins: [
    forms,
    scroll_bar
  ],
}

