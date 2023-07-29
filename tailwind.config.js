/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,mdx}", "./app/**/*.{js,jsx,mdx}"],
  theme: {
    // // screens: {
    // sm: "640px",
    // // => @media (min-width: 640px) { ... }
    // md: "768px",
    // // => @media (min-width: 768px) { ... }
    // lg: "1024px",
    // // => @media (min-width: 1024px) { ... }
    // xl: "1280px",
    // // => @media (min-width: 1280px) { ... }
    // "2xl": "1536px",
    // // => @media (min-width: 1536px) { ... }
    // // },
    extend: {
      fontFamily: {
        agdasima: ["Agdasima", "sens-serif"],
        dosis: ["Dosis", "sens-serif"],
        montserrat: ["Montserrat", "sens-serif"],
        poppins: ["Poppins", "sens-serif"],
      },
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        heroGradient: "linear-gradient(110deg, #4923B4 0%, #E878CF 100%)",
      },
      colors: {
        bluviolet: "#5027B5",
        lighgrey: "#666768",
      },
    },
  },
  plugins: [],
}
