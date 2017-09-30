const { resolve } = require('path')
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
    rules: [
      {
        test: /\.test.j$/,
        loader: 'ignore-loader'
      },{
        enforce: 'pre',
        test: /\.js$/,
        loader: 'standard-loader',
        exclude: /node_modules/
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[path][name]__[local]--[hash:base64:5]'
                }
              }
            ]
          },
        ],
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
