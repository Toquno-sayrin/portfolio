/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f3f7ff",
          100: "#cfd8e7",
          200: "#98a7c2",
          300: "#73829e",
          400: "#52617b",
          500: "#3d4a63",
          600: "#2a3447",
          700: "#1b2333",
          800: "#121826",
          900: "#0a0f18"
        },
        frost: {
          300: "#8cb8ff",
          400: "#6e97ef",
          500: "#4f73d9",
          600: "#3959b4"
        }
      },
      boxShadow: {
        paper: "0 22px 70px rgba(0, 0, 0, 0.28)",
        card: "0 18px 42px rgba(5, 10, 20, 0.34)"
      },
      fontFamily: {
        serif: ["\"Space Grotesk\"", "\"Segoe UI\"", "Helvetica", "Arial", "sans-serif"],
        sans: ["\"Space Grotesk\"", "\"Segoe UI\"", "Helvetica", "Arial", "sans-serif"],
        display: ["\"Space Grotesk\"", "\"Segoe UI\"", "Helvetica", "Arial", "sans-serif"]
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(140,184,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(140,184,255,0.08) 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
};
