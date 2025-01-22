/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      tii: "320px",
      ti: "360px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      xxxl: "1500px",
    },
    fontFamily: {
      headers: ["Iceberg"],
      buttons: ["Orbitron"],
      description: ["Cantarell"],
      navbar: [""],
    },
    colors: {
      primary: "#efe0ca",
      secondary: "#fe5000",
      thirdy: "#fcb045",
    },
    extend: {
      minHeight: {
        700: "700px",
      },
    },
  },
  plugins: [],
};
