/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: false,
  },
  plugins: [require('daisyui')],
};
