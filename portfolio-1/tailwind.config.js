/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'dark1': '#F8AFA6',
        // 'light1': '#FADCD9',
        // 'bg1': '#F9F1F0',

        'dark1': '#90887B',
        'light1': '#D4C8B4',
        'bg1': '#131112',
      },
      fontFamily: {
        gilroy: ['Gilroy', 'mono'],
      },
    },
  },
  plugins: [],
}

