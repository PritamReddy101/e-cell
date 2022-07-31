/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#182277",
        primaryDark: "#10185e",
        secondary: "#FFB7E4",
        secondaryDark: "#de8cbf",
        bgColor: '#f3f4f6',
      },
    },
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },
  },
  plugins: [],
}
