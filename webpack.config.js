const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    },
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: '.src/index.html'
    })
  ],
  mode: 'development'
};

