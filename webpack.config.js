const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundler.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: { 
    port:4444,
    open: true
},
module: {
    rules: [
        {
        test:/\.css$/i,
        use:['style-loader',MiniCssExtractPlugin.loader,'css-loader']
    },
    {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
}
    ]
},
plugins: [
    new HtmlWebpackPlugin({template: 'src/index.html'}),
    new MiniCssExtractPlugin({filename:'style.css'})
]

};