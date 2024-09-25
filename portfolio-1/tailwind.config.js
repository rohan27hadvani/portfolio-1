/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F8AFA6',
        'lighcream': '#FADCD9',
        'lightbg': '#F9F1F0'
      },
      fontFamily: {
        gilroy: ['Gilroy', 'mono']
      },
    },
  },
  plugins: [],
}

