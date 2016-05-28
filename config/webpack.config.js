const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./index.js');

const NODE_ENV = config.env;
const DEVELOPMENT = NODE_ENV === 'development';
const PRODUCTION = NODE_ENV === 'production';

const webpackConfig = {
  devtool: config.webpack.devtool,
  module: {},
};

// --------------------------------------
// Entry
// --------------------------------------
webpackConfig.entry = [
  config.paths.entryFile,
];

// --------------------------------------
// Bundle output
// --------------------------------------
webpackConfig.output = {
  path: config.paths.dist,
  filename: '[name].[hash].js',
  publicPath: config.webpack.output.publicPath,
};

// --------------------------------------
// Plugins
// --------------------------------------
webpackConfig.plugins = [
  new ExtractTextPlugin('styles.css'),
  // DefinePlugin is needed to expose any variables to webpack, and thus to be
  // able to access them in your application.
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(config.env),
      API_URL: JSON.stringify(config.apiUrl),
    },
  }),
  // Generate index.html with the correct hashed filenames
  new HtmlWebpackPlugin({
    template: config.paths.htmlTemplate,
    filename: 'index.html',
    favicon: config.paths.favicon,
    inject: 'body',
    minify: {
      collapseWhitespace: true,
    },
  }),
];

if (DEVELOPMENT) {
  webpackConfig.entry.push('webpack-hot-middleware/client');

  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
}

if (PRODUCTION) {
  webpackConfig.plugins.push(
    // OccurrenceOrderPlugin is needed for long-term caching to work properly.
    // See http://mxs.is/googmv
    new webpack.optimize.OccurenceOrderPlugin(),
    // Minify and optimize the JavaScript.
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        unused: true,
        /* eslint-disable */
        dead_code: true,
        /* eslint-enable */
        warnings: false,
      },
    }),
    // Merge all duplicate modules.
    new webpack.optimize.DedupePlugin()
  );
}

// --------------------------------------
// Loaders
// --------------------------------------
webpackConfig.module.loaders = [
  {
    test: /\.js$/,
    loader: ['babel'],
    include: config.paths.src,
    query: {
      cacheDirectory: true,
      presets: ['react', 'es2015', 'stage-0'],
    },
    env: {
      development: {
        presets: ['react-hmre'],
      },
      production: {
        presets: ['react-optimize'],
      },
    },
  },
  {
    test: /\.(css)(\?.+)$/,
    loader: ExtractTextPlugin.extract('style', 'css'),
    exclude: /node_modules/,
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style', 'css!sass'),
    exclude: /node_modules/,
  },
  {
    test: /\.(jpg|png|mp3)$/,
    loader: 'url?limit=25000',
    exclude: /node_modules/,
  },
];

module.exports = webpackConfig;
