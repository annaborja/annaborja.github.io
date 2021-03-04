const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  devServer: {
    historyApiFallback: true,
    open: true,
  },
  devtool: "inline-source-map",
  mode: "development",
});
