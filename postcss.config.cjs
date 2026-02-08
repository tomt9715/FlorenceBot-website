const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    // Import CSS files (@import support)
    require('postcss-import'),

    // PurgeCSS to remove unused Bootstrap styles
    purgecss.default({
      content: [
        './*.html',
        './*.js',
      ],
      // Conservative safelist - only keep classes that are dynamically added
      safelist: {
        standard: [
          // Bootstrap JS-added states (critical)
          'show',
          'showing',
          'hide',
          'hiding',
          'fade',
          'collapse',
          'collapsing',
          'collapsed',
          'active',
          'disabled',
          // Form validation states
          'is-valid',
          'is-invalid',
          'was-validated',
          // Custom dynamic states
          'loading',
          'loaded',
          'error',
          'success',
          'empty',
          'cart-open',
          'visible',
          'invisible',
        ],
        deep: [
          // Only keep component classes that have JS interactions
          /^modal/,
          /^dropdown/,
          /^tooltip/,
          /^popover/,
          /^toast/,
          /^offcanvas/,
          /^carousel/,
          /^accordion/,
          // Keep spinner for loading states
          /^spinner/,
          // Dashboard guides controls (dynamically shown)
          /^guides-/,
          /^category-/,
          // Purchase history controls (dynamically shown)
          /^purchase-/,
          /^pagination/,
          // Page hero sections (critical for page layouts)
          /^study-guides-hero/,
          /^store-hero/,
          /^pricing-hero/,
          /^florencebot-hero/,
          /^hero-/,
          // Profile pictures (dynamically rendered via JS)
          /^profile-pic/,
        ],
        greedy: [],
      },
      // Better class extraction from HTML and JS
      defaultExtractor: content => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
        const innerMatches = content.match(/[^<>"'`\s.(){}[\]#]+/g) || [];
        return [...new Set([...broadMatches, ...innerMatches])];
      },
    }),

    // Minify CSS
    require('cssnano')({
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: true,
      }]
    }),
  ],
};
