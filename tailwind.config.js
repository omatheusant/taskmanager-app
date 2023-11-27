/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#0F002E",
          "secondary": "#FFE2E2",
        },
      },
      {
        dark: {
          "primary": "#FFE2E2",
          "secondary": "#0F002E",
        },
      },
    ],
  },
}
  


