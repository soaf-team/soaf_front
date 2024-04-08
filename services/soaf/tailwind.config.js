/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#57C2FF",
        black: "#121212",
        white: "#ffffff",
        warn: "#FF3A39",
        border: "#8A91A833",
        gray50: "#F0F1F4",
        gray100: "#E2E3E9",
        gray200: "#A7ACBD",
        gray300: "#8A91A8",
        gray400: "#6D7592",
        gray500: "#575E75",
        gray600: "#414658",
        gray700: "#2C2F3A",
        gray800: "#2C2F3A",
      },
      backgroundImage: {
        main_gradient: "linear-gradient(90deg, #8CE3FF 0%, #57C2FF 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "loading-dots": {
          "0%, 100%": { transform: "scale(0.8)", bgColor: "#57C2FF" },
          "50%": {
            transform: "scale(1)",
            bgColor: "linear-gradient(90deg, #8CE3FF 0%, #57C2FF 100%)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spin: "spin 1s linear infinite",
        "loading-dots": "loading-dots 1s infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
