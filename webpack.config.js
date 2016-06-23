var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: "./app/js/app.js"
    // app: "./app/js/example.js"
  },
  output: {
    filename: "[name].js",
    // filename: "[name].[hash].js",
    path: "./build"
  },
  // 查错
  devtool: 'eval-source-map',
  // 热加载
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
    loaders: [
      {
        test: /\.scss/,
        loaders: ['style', 'css', 'sass'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?sourceMap'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack_react'
    })
  ]
}
