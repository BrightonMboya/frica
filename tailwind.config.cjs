/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        greenBlur: "url('/public/images/greenBlur.png')",
      },
    },
  },
  plugins: [],
};
