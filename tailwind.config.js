/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./shop.html",
    "./product.html",
    "./cart.html",
    "./contact.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        customBlack: '#1a1a1a',
        customGray: '#f5f5f5',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
