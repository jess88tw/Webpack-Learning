// 用來處理不同的檔案, 例如 css, js, img
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 處理 css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 處理路徑
const path = require("path");

module.exports = {
  // production 會壓縮, development 不會
  mode: "production",
  // 進入
  entry: "./src/index.js",
  // 輸出
  output: {
    path: path.resolve(__dirname, "dist"),
    // 用 hash 來避免快取, 且可以同時存在多個版本
    filename: "main.[hash].bundle.js",
  },
  // 開發伺服器, 可以及時編譯
  devServer: {
    static: "./dist",
  },
  // 載入器, 用來處理不同的檔案, 例如 css, js, img
  module: {
    rules: [
      // 處理 css
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      // 處理 js, 用 babel 轉換
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // 處理 img
      {
        test: /\.gif/,
        type: "asset/resource",
      },
    ],
  },
  // 插件
  plugins: [
    // 處理 html
    new HtmlWebpackPlugin({
      template: "./base.html",
    }),
    // 處理 css
    new MiniCssExtractPlugin({
      // 用 hash 來避免快取, 且可以同時存在多個版本
      filename: "main.[hash].css",
    }),
  ],
  // 開發時, 可以看到原始碼
  devtool: "source-map",
};
