const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  // entry: "./src/index.js",
  entry: {
    // index: "./src/index.js",
    // print: "./src/print.js",
    // another: "./src/another-module.js",

    index: {
      import: "./src/index.ts",
      // dependOn: "shared",
    },
    // another: {
    //   import: "./src/another-module.js",
    //   dependOn: "shared",
    // },
    // shared: "lodash",
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
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"], // sy
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
        ],
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          // "style-loader",
          MiniCssExtractPlugin.loader,
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    // Add support for TypeScripts fully qualified ESM imports.
    extensionAlias: {
      ".js": [".js", ".ts"],
      // ".cjs": [".cjs", ".cts"],
      // ".mjs": [".mjs", ".mts"],
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin(), // sy
  ],
  devtool: "inline-source-map",
};
