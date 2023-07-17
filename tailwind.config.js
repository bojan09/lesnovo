/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#55c57a",
        primaryDarkColor: "#7ed56f",
        primaryLightColor: "#28b485",
        secondaryLightColor: "#ffb900",
        secondaryDarkColor: "#ff7730",
        tertiaryLightColor: "#2998ff",
        tertiaryDarkColor: "#5643fa",
        grayLightColor: "#f7f7f7",
        grayDarkColor: "#eeeeee",
        grayDarkOneColor: "#999999",
        grayDarkTwoColor: "#777777",
        grayDarkThreeColor: "#333333",
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
};
