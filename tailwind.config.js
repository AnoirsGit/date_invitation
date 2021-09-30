const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
  ],
  purge: {
    content: [
      "./src/App.svelte",
    ],
    enabled: production // disable purge in dev
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "black": '#000',
      "white": '#fff',
      "brown": '#2D112B'
    }
  }
};