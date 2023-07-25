/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '1rem'
  },
    extend: {
      colors: {
        'primary': '#676cb8',
        'secondary': '#3695cc',
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        polt: ["Poltawski Nowy", "serif"],
        Tanger: ['Tangerine', 'cursive'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  variants: {
    extend: {
        display: ['group-hover'],
        visibility: ['group-hover'],
    },
},
  plugins: [],
});
