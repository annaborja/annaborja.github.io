const CopyPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.tsx",
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
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  output: {
    clean: true,
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "docs"),
  },
  plugins: [
    new CopyPlugin({
      patterns: ["CNAME"],
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon.ico",
      template: "./src/index.html",
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: "./src/**/*.{ts,tsx,js,jsx}",
      },
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
    }),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
};
