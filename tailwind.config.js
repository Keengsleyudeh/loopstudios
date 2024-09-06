/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '488px',
      md: '768px',
      lg: '976px',
      xl: '1448px'
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata']
      },
      letterSpacing: {
        widest: '.3em',
      }
    },
  },
  plugins: [],
}

