module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"],
      libreFranklin: ["Libre Franklin", "sans-serif"],
    },
    extend: {
      colors: {
        prm: "#283F95",
        offwhite: "#F8F8F8",
        offwhite100: "#F9F9F9",
        gray_50: "#C4C4C4",
        gray_100: "#323232",
        pink_100: "#885FFC",
        yellow_50: "#D9CDBC",
        yellow_100: "#FFBF00",
        yellow_200: "#FFF1DB",
        blue_100: "#30C18B",
        blue_200: "#100887",
        blue_300: "#3780EF",
        gray_200: "#CECECE",
        gray_300: "#ADADAD",
      },
      fontSize: {
        xs: "12",
        sm: "14px",
        base: "16px",
        md: "18px",
        lg: "20px",
        lgg: "20.5px",
        llg: "21px",
        "2lg": "24px",
        xl: "28px",
        "2xl": "36px",
        "2xxl": "40px",
        "4xl": "56px",
        "5xl": "64px",
      },
      letterSpacing: {
        tightest: "0.01em",
        tighter: "-0.035em",
        tight: "-0.035em",
        // normal: '0',
        wide: ".-0.005em",
        // wider: '.05em',
        // widest: '.1em',
        // widest: '.25em',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}
