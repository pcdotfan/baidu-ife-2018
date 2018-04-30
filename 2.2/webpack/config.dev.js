const path = require("path");
const webpackMerge = require("webpack-merge");
const webpackConfigBase = require("./config.base.js");


module.exports = webpackMerge(webpackConfigBase, {
  mode: 'development',
  module: {
    rules: [
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    port: 8080,
    watchOptions: {
      poll: 1000
    },
    stats: {
      children: false
    }
  },
  plugins: [
  ]
});
