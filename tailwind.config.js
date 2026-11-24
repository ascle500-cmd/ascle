/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8ecdff",
          400: "#59b1ff",
          500: "#3392ff",
          600: "#1b74f5",
          700: "#145ee1",
          800: "#174db6",
          900: "#19448f",
        },
        ink: { 900: "#0b1220", 800: "#111a2e", 700: "#1a2540" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "sans-serif"],
      },
      boxShadow: { card: "0 10px 30px -12px rgba(16,24,40,.15)" },
    },
  },
  plugins: [],
};
