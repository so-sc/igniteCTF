/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f3f4f6",

          secondary: "#9ca3af",

          accent: "#22c55e",

          neutral: "#292524",

          "base-100": "#1c1917",

          info: "#67e8f9",

          success: "#6ee7b7",

          warning: "#fde047",

          error: "#be123c",
        },
      },
    ],
  },
};
