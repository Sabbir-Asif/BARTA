/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-primary": "#607274",
        "cream-primary" : "#fdfef7",
        "green-dark": '#435051'
      },
      fontFamily: {
        koulen: 'Koulen',
        merienda: 'Merienda',
        ruhi: 'Frank Ruhl Libre',
        nunito: 'Nunito Sans',
      }
    }
  },
  plugins: [
    daisyui
  ],
}

