const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  devServer: {
    open: true,
  },
  devtool: "inline-source-map",
  mode: "development",
});
