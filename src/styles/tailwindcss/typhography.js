const plugin = require('tailwindcss/plugin');

const typhograpy = plugin(function ({ addUtilities, config }) {
  addUtilities({
    '.body-20-b': {
      color: config('theme.colors.red.500'),
      fontSize: '40px',
      fontWeight: 'bold',
    },
  });
});

module.exports = typhograpy;
