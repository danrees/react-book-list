const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'app-client.js'),
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        loader: ['babel-loader'],
        query: {
          cacheDirectory: 'babel_cache',
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
       test: /\.png$/,
       loader: "url-loader?limit=100000"
     },
     {
       test: /\.jpg$/,
       loader: "file-loader"
     },
     {
       test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
       loader: 'url?limit=10000&mimetype=application/font-woff'
     },
     {
       test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
       loader: 'url?limit=10000&mimetype=application/octet-stream'
     },
     {
       test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
       loader: 'file'
     },
     {
       test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
       loader: 'url?limit=10000&mimetype=image/svg+xml'
     }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      mangle: true,
      sourcemap: false,
      beautiy: false,
      dead_code: true
    })
]
};
