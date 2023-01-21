/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
  ],
  purge: {
    content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/ui/**/*.{js,jsx,ts,tsx}', './next.config.js'],
  },
  theme: {
    extend: {
      transitionProperty: {
        height: "height"
      }
    },
  },
  plugins: [],
}
