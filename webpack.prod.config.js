var path = require('path');
var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(/\.svg$/);
var nodeModulesDir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

if(!process.env.NODE_PROJECT){
  throw Error('\n\n No app_id specified! Check README.md \n\n');
}

console.log(`\n\n Running a production for app_id: ${process.env.NODE_PROJECT} \n\n`);


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
    filename: './build/js/[name].js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: [nodeModulesDir] },
      { test: /\.scss$/,  loaders: ['style', 'css', 'postcss', 'sass']}, //loader: ExtractTextPlugin.extract('style', 'css!postcss!sass') }
    ],
  },
  plugins: [
    ignore,
    //new ExtractTextPlugin('./build/css/main.css'),
    //new webpack.optimize.CommonsChunkPlugin('vendor', './build/js/vendor.js', Infinity),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
         '__APPID__': JSON.stringify(process.env.NODE_PROJECT)
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