/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1F1F1F',
        'silvergray': '#B3B3B3',
        'almostBlack': '#292929',
        'almostBlackHover': '#3E3E3E',
        'mainBackground': '#121212',
      },
    },
  },
  plugins: [],
}