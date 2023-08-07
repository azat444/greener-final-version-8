/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        bar: '0px 3px 4px rgba(0, 0, 0, 0.15)',
        leftCard: '0px 4px 20px rgba(6, 32, 35, 0.1)',
      },
    },
  },
  plugins: [],
};
