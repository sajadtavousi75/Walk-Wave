/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      screens:{
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2.65rem",
        xl: "3.25rem",
        "2xl": "3.5rem"
      },
    },
    extend: {
      colors:{
        primary1:'#fff',
        primary:'#000',
        secondary1:'#008080',
        secondary2:'#A62639',
        box: '#f6f6f6'
      },
      fontFamily:{
        kohob:['kohob'],
        kohol:['kohol'],
        quikr:['quikr']
      },
      margin:{
        '0':'0',
        'auto':'auto',
      },
      padding:{
        '0':'0'
      }
    },
  },
  plugins: [],
};
