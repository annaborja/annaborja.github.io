const { mergeWithRules } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = mergeWithRules({
  module: {
    rules: {
      test: "match",
      use: {
        loader: "match",
        options: "merge",
      },
    },
  },
})(common, {
  devServer: {
    open: true,
  },
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      // TypeScript
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.dev.json",
            },
          },
        ],
      },
    ],
  },
});
