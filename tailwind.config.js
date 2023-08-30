/** @type {import('tailwindcss').Config} */

const forms = require('@tailwindcss/forms');
const scroll_bar = require('@gradin/tailwindcss-scrollbar');

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '16': '16rem',
      },
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

