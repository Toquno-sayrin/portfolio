/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f7f5",
          100: "#ecebe7",
          200: "#d8d5cc",
          300: "#b7b2a3",
          400: "#918b79",
          500: "#726c5f",
          600: "#5d574d",
          700: "#4a453d",
          800: "#33312c",
          900: "#1d1c19"
        }
      },
      boxShadow: {
        paper: "0 18px 60px rgba(0, 0, 0, 0.06)",
        card: "8px 10px 0 rgba(0, 0, 0, 0.08)"
      },
      fontFamily: {
        serif: ["\"Space Grotesk\"", "\"Segoe UI\"", "Helvetica", "Arial", "sans-serif"],
        sans: ["\"Space Grotesk\"", "\"Segoe UI\"", "Helvetica", "Arial", "sans-serif"],
        display: ["\"Space Grotesk\"", "\"Segoe UI\"", "Helvetica", "Arial", "sans-serif"]
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(29,28,25,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(29,28,25,0.06) 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
};
