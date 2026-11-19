/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.njk", "./src/assets/js/*.js", "!./src/assets/js/d3.v7.min.js"],
  safelist: ["list-disc"],
  theme: {
    fontSize: {
      xs: ["12px", "18px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      "2xl": ["26px", "34px"],
      "3xl": ["32px", "36px"],
      "4xl": ["36px", "40px"],
    },
    extend: {},
  },
  plugins: [],
};
