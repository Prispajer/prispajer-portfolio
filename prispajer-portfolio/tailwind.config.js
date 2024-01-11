/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      novaCut: ["NovaCut", "sans-serif"],
      passeroOne: ["PasseroOne", "sans-serif"],
    },
  },
  plugins: [],
};
