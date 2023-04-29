/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        designColor: "#ff014f",
        designColor1:"#a3e635",
        cardColor: "rgba(255, 255, 255, 0.13)",
        textColor1: "rgba(255, 255, 255, 0.4)",
        textColor2: "rgba(255, 255, 255, 0.8)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        cardShadow: "0 0 20px -10px rgba(0,0,0,0.5)",
        shadow1: "0px 0px 150px -45px rgba(255, 51, 0, 0.5)",
        shadow1h: "0px 0px 120px -55px rgba(255, 51, 0, 0.5)",
      },
      
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
