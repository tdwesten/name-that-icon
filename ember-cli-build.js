const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    tests: false,
    postcssOptions: {
      compile: {
        cacheInclude: [/.*\.(css|scss|hbs)$/, /.tailwind\.config\.js$/],
        map: false,
        plugins: [tailwindcss('./app/styles/tailwind.config.js'), autoprefixer],
      },
    },
  });

  return app.toTree();
};
