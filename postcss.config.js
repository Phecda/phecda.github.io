const postcssNesting = require('postcss-nesting');
const tailwindcss = require('@tailwindcss/postcss');

module.exports = {
  plugins: [postcssNesting(), tailwindcss()],
};
