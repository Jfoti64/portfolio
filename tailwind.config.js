// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBackground: '#EDEDE9',
        customHover: '#A1A1A1',
        skillBox: '#f5f5f5',
        skillBoxHover: '#e0e0e0',
        linkBox: '#333333',
        linkBoxHover: '#1a1a1a',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
