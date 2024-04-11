/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F5F7FA',
        'skyBlue': '#34B3F1'
      }
    },
  },
  plugins: [],
}

