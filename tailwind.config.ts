import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        navy: {
          50: "#eef1f7",
          100: "#d4dcec",
          200: "#a9b9d9",
          300: "#7e96c6",
          400: "#4a679f",
          500: "#1f3a68",
          600: "#152b52",
          700: "#101f3d",
          800: "#0b1728",
          900: "#060d17",
          950: "#040911",
        },
        orange: {
          50: "#fff4ed",
          100: "#ffe4d1",
          200: "#ffc6a3",
          300: "#ffa066",
          400: "#ff7f33",
          500: "#f4650f",
          600: "#e04e08",
          700: "#b93a09",
          800: "#932f0f",
          900: "#78290f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        soft: "0 4px 24px -6px rgba(6,13,23,0.10)",
        card: "0 8px 30px -8px rgba(6,13,23,0.14)",
        lift: "0 20px 45px -12px rgba(6,13,23,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
