/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    "./**/*.{js,ts,jsx,tsx}",
  ],
  purge: {
    enabled: true,
    content: ['./**/*.tsx'],
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
