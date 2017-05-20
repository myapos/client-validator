var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = { 
  entry: {
    javascript: './app/js/init.js',
    },  

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },  

  module: {
    rules: [
      {   
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, '/node_modules/')
        ],  
        loader: 'babel-loader'
      }, 
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      } 
    ]   
  },  

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },  

  plugins: [HTMLWebpackPluginConfig]
}
