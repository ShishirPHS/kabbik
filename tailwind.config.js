/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontNarrow: ["Archivo Narrow", "sans-serif"],
        fontOxanium: ["Oxanium", "sans-serif"],
        fontInter: ["Inter", "sans-serif"],
        fontItalianno: ["Italianno", "cursive"],
        fontK2D: ["K2D", "sans-serif"],
        fontKalam: ["Kalam", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald"],
  },
};
