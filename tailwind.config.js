/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
        mono: ["var(--font-victor-mono)"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#0A090C",
          "secondary": "#FFE2E2",
          "sans": "var(--font-poppins)",
        },
      },
      {
        dark: {
          "primary": "#FFE2E2",
          "secondary": "#0A090C",
        },
      },
    ],
  },
}
  


