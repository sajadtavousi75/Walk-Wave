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
    extend: {
      colors:{
        primary1:'#fff',
        primary:'#000',
        secondary1:'#008080',
        secondary2:'#A62639',
      },
      fontFamily:{
        kohob:['kohob'],
        kohol:['kohol'],
        quikr:['quikr']
      }
    },
  },
  plugins: [],
};
