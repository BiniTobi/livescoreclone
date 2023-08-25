/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm":"360px"
      }
    },
    fontFamily:{
      caveat:['Caveat Brush', 'cursive']
    }
  },
  plugins: [],
}

