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
        themePrimary: "#645394",
        themeWhite: "#F2F1F0",
        themeBlack: "#181818",
        shade: "#0B3954",
        light: "#BFD7EA",
        contrast: "#E4FF33",
      },
    },
  },
  plugins: [],
};
