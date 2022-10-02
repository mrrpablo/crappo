/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        button: '#3671E9',
        text: '#FFFFFF',
        cards: '#2B076E',
        cardtext: '#0D0D2B',
        span: '#BDBDBD'
      }
    },
  },
  plugins: [],
}
