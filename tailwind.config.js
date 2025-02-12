module.exports = {
  content: [
    './src/*.html', 
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'hijau': {
          DEFAULT: '#066F3E',
          50: '#38F49D',
          100: '#25F393',
          200: '#0CE37F',
          300: '#0ABC69',
          400: '#089654',
          500: '#066F3E',
          600: '#033A20',
          700: '#000503',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        'greenpadi': '#066F3E',  // Add GREENPADI color here
      },
    },
  },
  variants: {},
  plugins: [require('daisyui')],
};
