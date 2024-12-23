/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: '#7C9082',
        secondary: '#A5C4C7',
        accent: '#E6D5B8',
        charcoal: '#333333',
      },
    },
  },
  plugins: [],
};