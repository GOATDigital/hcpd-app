var path = require('path');
var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(/\.svg$/);
var nodeModulesDir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
    vendor: [
      'lodash',
      'normalizr',
      'react',
      'redux',
    ],
  },
  output: {
    publicPath: 'http://localhost:8080/',
    filename: './public/js/[name].js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: [nodeModulesDir] },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass') },
    ],
  },
  plugins: [
    ignore,
    new ExtractTextPlugin('./public/css/main.css'),
    //new webpack.optimize.CommonsChunkPlugin('vendor', './public/js/vendor.js', Infinity),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
         '__APPID__': JSON.stringify('naaf87561')//naaf87561 OR nea64356
    }),
    // Optimize the bundle in release (production) mode
    new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: true,
    }
  }),
  new webpack.optimize.AggressiveMergingPlugin()
  ],
};