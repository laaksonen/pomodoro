const path = require('path');
const express = require('express');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config');
const config = require('../config');

const app = express();
const compiler = webpack(webpackConfig);

if (process.env.NODE_ENV === 'development') {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  console.log(chalk.blue(
    'Webpack HMR and dev middleware are enabled.'
  ));
}

// Issue with html-webpack-plugin only generating stuff for the index path
// Fix from: https://github.com/ampedandwired/html-webpack-plugin/issues/145
app.get('*', function (req, res, next) {
  const filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, function (err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });

});

module.exports = app;
