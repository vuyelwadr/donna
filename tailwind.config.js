/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'alex-brush': ['Alex Brush', 'cursive'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'roca': ['Roca One', 'Open Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#8B2635',
          secondary: '#e8d3c8',
          accent: '#D4AF37',
          dark: '#2C1810',
          light: '#FAF3F0',
        },
      },
    },
  },
  plugins: [],
};