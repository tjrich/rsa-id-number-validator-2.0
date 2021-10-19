module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'rsa-flag': "url('/public/img/rsa-flag.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
