const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  // entry: "./src/index.js",
  entry: {
    // index: "./src/index.js",
    print: "./src/print.js",
    // another: "./src/another-module.js",

    index: {
      import: "./src/index.js",
      dependOn: "shared",
    },
    another: {
      import: "./src/another-module.js",
      dependOn: "shared",
    },
    shared: "lodash",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  output: {
    // filename: "main.js",
    // filename: "bundle.js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    // 可以修改html页面title
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
};
