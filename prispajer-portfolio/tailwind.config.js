/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    fontFamily: {
      novaCut: ["NovaCut", "sans-serif"],
      passeroOne: ["PasseroOne", "sans-serif"],
    },
    colors: {
      primary: "#efe0ca",
      secondary: "#fe5000",
    },
  },
  plugins: [],
};
