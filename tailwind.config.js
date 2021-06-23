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
        "800": "800px"
      },
      height: {
        "400": "400px"
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
