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

        // #050506
        // #0C0609
        // #700566
        // #0C0D16
        // #110F1A
        // #4C1358 
        // #B28584
        // #3E1029
        // #151A2E

      },
      fontFamily: {
        gilroy: ['Gilroy', 'mono'],
      },
      screens: {
        'mobile': '0px',
        
        'tablet': '640px',
  
        'laptop': '1024px',
  
        'desktop': '1366px',
      
        'screen14': '1440px',
        
        'screen16': '1540px'
      
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

