const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.ts",
  },
  module: {
    rules: [
      {
        // Fonts
        test: /\.(eot|otf|ttf|woff|woff2)$/i,
        type: "asset/resource",
      },
      {
        // Images
        test: /\.(gif|jpeg|jpg|png|svg)$/i,
        type: "asset/resource",
      },
      {
        // Styles
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      // TypeScript
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "docs"),
  },
  plugins: [
    // Automatically clean build output directory.
    new CleanWebpackPlugin(),
    // Copy certain files or directories to the build output directory.
    new CopyPlugin({
      patterns: ["CNAME"],
    }),
    // Autogenerate index.html file.
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon.ico",
      title: "Anna Borja",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
