/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00a1f1',
      },
      boxShadow: {
        filterBoxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.25)',
        commentBoxShadow: '0px -3px 3px 0px rgba(0, 0, 0, 0.25)',
        tabButtonActive: 'inset 1px 1px 4px 0px rgba(0, 0, 0, 0.15)'
      },
      borderRadius: {
        filterBoxRadius: '5px'
      }
    },
  },
  plugins: [],
}
