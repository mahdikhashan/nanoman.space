/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
    "./next.config.js"
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
