/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        themeBlueD: "#61A0AF",
        themeBlueL: "#96C9DC",
        themePinkD: "#F06C9B",
        themePinkL: "#F9B9B7",
        themeYellow: "#F5D491",
        themeWhite: "#F2F1F0",
        themeBlack: "#181818",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
