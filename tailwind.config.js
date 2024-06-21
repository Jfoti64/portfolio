/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1da1f2',
        secondary: '#14171a',
      },
      fontFamily: {
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
