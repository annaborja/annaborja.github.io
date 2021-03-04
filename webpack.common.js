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
    publicPath: "/",
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
        files: "./src/**/*.{js,ts,tsx}",
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
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@constants": path.resolve(__dirname, "src/constants/"),
      "@data": path.resolve(__dirname, "src/data/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
};
