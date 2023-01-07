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
        secondary: '#5EEAD4',
        'secondary-dark': '#2DD4BF',
        tertiary: '#363636',
        background: '#16161a',
        main: '#FFFFFE',
        paragraph: '#72757e',
      },
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  plugins: [],
}
