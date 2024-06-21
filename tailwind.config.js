/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBackground: '#EDEDE9',
        customHover: '#A1A1A1',
      },
    },
  },
  plugins: [],
};
