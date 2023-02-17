/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rick': {
          1: 	'#02afc5',
          2: 	'#35c9dd',
          3: 	'#87d1db',
          4: 	'#a9f3fd',
          5: 	'#4cb5c3'
        }
      }
    },
  },
  plugins: [],
}
