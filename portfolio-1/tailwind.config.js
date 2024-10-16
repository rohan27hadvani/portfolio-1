/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark1': '#F8AFA6',
        'light1': '#FADCD9',
        'bg1': '#F9F1F0',

        'dark2': '#90887B',
        'light2': '#D4C8B4',
        'bg2': '#131112',

        'dark3': 'darkblue',
        'light3': 'lightblue',
        'bg3': 'white',
      },
      fontFamily: {
        gilroy: ['Gilroy', 'mono'],
      },
      screens: {
        'mobile': '320px',

        'tablet': '640px',
  
        'laptop': '1024px',
  
        'desktop': '1280px',
      
        'screen14': '1440px',
        
        'screen16': '1695px'
      
      },
    },
    variants: {
      extend: {
        order: ['responsive'],
      },
    },
  },
  plugins: [],
  
}

