const path = require('path');
const express = require('express');
const chalk = require('chalk');
const serveStatic = require('serve-static');
const serveFavicon = require('serve-favicon');
const config = require('../config');

const app = express();

app.use(serveStatic(config.paths.dist));
app.use(serveFavicon(config.paths.prod.favicon));

app.get('*', function (req, res) {
  res.sendFile(config.paths.prod.html);
});

module.exports = app;
