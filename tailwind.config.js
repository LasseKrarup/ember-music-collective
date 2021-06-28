const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Chakra Petch"',
          ...defaultTheme.fontFamily.sans
        ],
        fira: [
          '"Fira Sans"'
        ]
      },
      backgroundColor: {
        main: "#D0D8D1"
      },
      textColor: {
        "disabled": "#707070"
      },
      width: {
        "400": "400px",
        "500": "500px",
        "712": "712px",
        "800": "800px",
        "888": "888px"
      },
      height: {
        "400": "400px",
        "500": "500px"
      },
      screens: {
        "3xl": "1840px"
      }
    },
  },
  variants: {
    extend: {
      margin: ["last"],
      padding: ["last"]
    },
  },
  plugins: [],
}
