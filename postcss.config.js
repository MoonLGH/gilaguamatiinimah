const purgecss = require('postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './src/*.html',
    './src/*.vue',
    './src/*.jsx',
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // Update to use the correct PostCSS plugin
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
