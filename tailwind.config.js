/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          20: "#F1F0FE",
          50: "#A5A0F9",
          100: "#5B51F2",
          200: "#493DF0",
        },
        gray: {
          100: "#74788D",
          200: "#314047",
          300: "#CED1D2",
          400: "#31364B",
          500: "#1A1A2E",
          600: "#0F0F1E",
        },
        orange: {
          200: "#FF4748",
        },
      },
    },
  },
  plugins: [],
};
