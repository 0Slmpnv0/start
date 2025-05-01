/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#06141B',
          darker: '#11212D',
          darkblue: '#253745',
          blue: '#4A5C6A',
          gray: '#9BA8AB',
          light: '#CCD0CF',
        },
      },
    },
  },
  plugins: [],
} 