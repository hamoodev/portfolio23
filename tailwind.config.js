/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#042940",
        accent: "#9FC131"
      },
       animation: {
        slide: 'slideRight 0.6s ease-in-out'
       },
       keyframes: theme => ({
        slideRight: {
          '0%': { transform: 'translateX(-40px)', opacity: "0%"},
          '100%' : { transform: 'translateX(0)', opacity: "100%"},
        }
       })
    },
  },
  plugins: [],
}
