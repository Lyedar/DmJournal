const { resolve } = require('path');
const srcDir = resolve(__dirname, 'src')
const HtmlWbppackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')



module.exports = {
  entry : `${srcDir}/index.js`,
  output : {
    filename : 'bundle.js',
    publicPath: '/'
  },
  module:{
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'standard-loader',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract(['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]",camelCase'])
    }]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWbppackPlugin({
      template: `${srcDir}/index.html`
    }),
    new ExtractTextPlugin({
      filename: 'styles.[chunkhash:6].css',
      allChunks: true
    }),
    new DashboardPlugin()
  ]
}
