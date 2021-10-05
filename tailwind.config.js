const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
  ],
  purge: {
    enabled: true,
    content: ['./src/**/*.svelte'],
    enabled: production // disable purge in dev
  },
  theme: {
    extend: {
      spacing: {
        '192': '48rem',
        '180': '45rem',
        '168': '42rem',
        '160': '40rem',
        '144': '36rem',
        '128': '32rem',
        '112': '28rem',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "black": '#000',
      "white": '#fff',
      "brown": '#2C112A'
    }
  }
};