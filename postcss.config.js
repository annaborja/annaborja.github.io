module.exports = {
  plugins: [
    // Ensure support for modern CSS.
    require("postcss-preset-env"),
    // Minify CSS.
    require("cssnano"),
  ],
};
