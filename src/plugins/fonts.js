const plugin = require('tailwindcss/plugin');

const fonts = plugin(function ({ addUtilities, config }) {
  addUtilities({
    '.font-20-b': {
      color: config('theme.colors.red.500'),
      'font-size': '40px',
      'font-weight': 'bold',
    },
  });
});

module.exports = fonts;
