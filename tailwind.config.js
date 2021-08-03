module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {},
    screen: {}
  },
  variants: {
    extend: {
      borderWidth: ['last'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
