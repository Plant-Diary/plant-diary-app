module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "[name]-[contenthash].bundle.js",
    publicPath: "/",
  },
  optimization: {
    minimize: false,
  },
};
