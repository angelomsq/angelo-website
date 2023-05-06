/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#8B5CF6',
        'primary-dark': '#7C3AED',
        secondary: '#2dd4ba',
        'secondary-dark': '#14b89e',
        tertiary: '#2D2F35',
        background: '#22242A',
        main: '#FFFFFE',
        paragraph: '#7D8087',
      },
      boxShadow: {
        card: '0 0 25px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  plugins: [],
}
