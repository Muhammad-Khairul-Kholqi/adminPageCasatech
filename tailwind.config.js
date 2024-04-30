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
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
        'lucida-bright': ['Lucida Bright', 'serif'],
        'merriweather': ['Merriweather', 'serif'],
        'butler': ['Butler', 'sans-serif'],
        'ashbury': ['Ashbury', 'sans-serif'],
        'bellefair': ['Bellefair', 'serif'],
        'lato': ['Lato', 'sans-serif'],
        'helvetica': ['Helvetica', 'sans-serif']
      },
    },
  },
}