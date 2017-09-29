  const webpack = require('webpack');
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');
  const ManifestPlugin = require('webpack-manifest-plugin');


  module.exports = {
    entry: {
      app: './src/app.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist'
    },
    plugins: [
      new ManifestPlugin(),
      new CleanWebpackPlugin(['dist/*.*']),
      new HtmlWebpackPlugin({
        title: 'A mi gusto'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }    
  };