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
        primary: "#3E0B5E",
        secondary: "#AF95E2",
        lighter: "#CAE894",
        darker: "#224C25",
        base: "#F9F9F9",
        shade: "#0B3954",
        light: "#BFD7EA",
        contrast: "#E4FF33",
      },
    },
  },
  plugins: [],
};
