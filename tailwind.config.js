module.exports = {
  content: ["./src/**/*.{html,js,vue}", "./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
};
