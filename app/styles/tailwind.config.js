module.exports = {
  content: [
    './app/**/*.{hbs,ts,js}',
    'app/index.html',
    './app/game/controller.ts',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Overpass',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    extend: {
      fontSize: {
        '12xl': '12rem',
      },
    },
  },
  plugins: [],
};
