/** @type {import('tailwindcss').Config} */
import { handler } from "tailwind-scrollbar-hide";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "rgba(217, 217, 217, 1)",
        transparent: "transparent",
        current: "currentColor",
        extrabright: "#F5F9FF",
        bright: "#D3E2FF",
        dark: "#77A5FF",
        white: "#FFFFFF",
        lightGray: "#F2F2F2",
      },
      boxShadow: {
        normal: "0 3px 3px rgba(0,0,0,0.2);",
      },
    },
  },
  plugins: [handler],
};
