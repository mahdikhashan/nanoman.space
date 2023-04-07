/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
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
