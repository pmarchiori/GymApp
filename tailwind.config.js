/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#9bb5a4",
          100: "#839b8b",
          200: "#6a8272",
          300: "#52695a",
          400: "#395041",
          500: "#283c2f",
          600: "#1e2d23",
          700: "#141e18",
          800: "#0a0f0c",
          900: "#000000",
        },
      },
    },
    plugins: [],
  },
};
