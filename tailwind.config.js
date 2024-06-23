/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBackground: '#EDEDE9',
        customHover: '#A1A1A1',
        skillBox: '#f5f5f5', // Light grey for skill boxes
        skillBoxHover: '#e0e0e0', // Slightly darker grey for hover state
        linkBox: '#333333', // Darker grey for links
        linkBoxHover: '#1a1a1a', // Even darker grey for link hover state
      },
    },
  },
  plugins: [],
};
