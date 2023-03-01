/** @type {import('tailwindcss').Config} */
const { pink, white, gray, zinc, teal, black, slate, red } = require('tailwindcss/colors');
const colors = require('tailwindcss/colors')


module.exports = {
  // content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/layouts/**/*.{js,jsx,ts,tsx}',
    './src/layouts/dashBoardLayout/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#f6f6f6",
      secondary: "white",
      btnColor: "#2bc5b4",
       amber: colors.amber,
        emerald: colors.emerald,
      white:"#fff",
      pink:pink,
      white:white,
      gray:gray,
      zinc:zinc,
      teal:teal,
      black:black,
      slate:slate,
      red:red

    },
  },
  plugins: [],
};
