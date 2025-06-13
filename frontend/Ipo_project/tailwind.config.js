/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'primary': '#414BEA',
        'secondary': '#F05537',
        'text-dark': '#1E1E1E',
        'text-light': '#5A5858',
        'text-nav': '#9A9A9A',
        'background': '#F6F5F5',
      },
      screens: {
        'xl-desktop': '1500px',
      },
    },
  },
  plugins: [],
}