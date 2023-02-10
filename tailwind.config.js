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
