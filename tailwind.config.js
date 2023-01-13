/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/index.html", "./src/**/*.{vue,js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#ff7900",
      },
      screens: {
        "5xl": "2240px",
      },
    },
  },
  plugins: [],
};
