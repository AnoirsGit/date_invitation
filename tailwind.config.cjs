/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      spacing: {
        192: "48rem",
        180: "45rem",
        168: "42rem",
        160: "40rem",
        144: "36rem",
        128: "32rem",
        112: "28rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      brown: "#2C112A",
    },
  },
  plugins: [],
};
