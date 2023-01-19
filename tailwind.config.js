/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx'],
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
