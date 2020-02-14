const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/BrowserEntry.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        //loader: 'eslint-loader',
        loader: 'babel-loader',
        include: path.join(__dirname, '/js')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
