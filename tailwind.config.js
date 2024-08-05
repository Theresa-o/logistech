/** @type {import('tailwindcss').Config} */
export default {
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
          100: "#A5A0F9",
        },
        orange: {
          200: "#FF4748",
        },
      },
    },
  },
  plugins: [],
};
