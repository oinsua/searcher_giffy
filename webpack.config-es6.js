const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const rules_css = {
    test: /\.css$/i,
    use: [MiniCSSExtractPlugin.loader, 'css-loader'],
    };

module.exports = {
  /**Entradas **/
  entry: path.join(__dirname, 'src','index.js'),
    output: {
    filename: 'main-es6.js'
  },
  module: {
        rules: [ rules_css]
  },
  /** para realizar importaciones relativas y no absolutas */
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.json', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({  
        template: 'src/index.html',
        title:'Searcher to Gifs',
        filename: 'index.html'
    }),
  ]
}