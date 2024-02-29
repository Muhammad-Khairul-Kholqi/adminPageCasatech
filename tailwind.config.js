/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
}