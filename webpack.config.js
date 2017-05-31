var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(/\.svg$/)
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

//for win
//https://stackoverflow.com/questions/25112510/how-to-set-environment-variables-from-within-package-json-node-js

const isDebug = global.DEBUG === false ? false : !process.argv.includes('--release');
//const appToOpen = process.env.NODE_ENV ? process.env.NODE_ENV.replace(/\d/g, '') : ''

module.exports = {
  devtool: isDebug ? 'source-map' : false,
  entry: {
    main: [
      './src/main.js'
      ,'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server'
    ]
  },
  output: {
    publicPath: 'http://localhost:8080/',
    filename: '/js/[name].js',
    library: 'Hcpd',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel?' + JSON.stringify({presets: ['react', 'es2015', 'stage-0']})], exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] }
    ]
  },
  plugins: [ignore,
        new webpack.DefinePlugin({
              '__APPID__': JSON.stringify(process.env.NODE_ENV)//naaf87561 OR nea64356
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080/' })
      ],
  devServer: {
    host: '0.0.0.0',
    proxy: {},
    stats: 'errors-only'
  }
};
