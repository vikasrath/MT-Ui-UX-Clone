/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'xsMobile': '0',
        'mobile': '576px', /* sm*/
        'tablets': '768px', /* md*/
        'laptop': '992px',  /* lg*/
        'desktop': '1300px',  /* 2xl*/
      },
    },
  },
  plugins: [],
}

// 'sm' :'503px',
// 'md': '770px', 
// 'lg': '992px', 
// 'xl': '1200px', 
// '2xl': '1300px',