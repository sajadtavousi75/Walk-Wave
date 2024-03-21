/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        koho:['koho'],
        quikr:['quikr']
      }
    },
  },
  plugins: [],
};
