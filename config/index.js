const path = require('path');
const merge = require('lodash/merge');

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL || 'http://localhost:3090';

const PROJECT_ROOT = path.resolve(__dirname, '..');
const SRC_DIR = 'src';
const DIST_DIR = 'dist';
const SERVER_DIR = 'server';
const STATIC_DIR = 'src/static';


const config = {
  env: NODE_ENV,
  apiUrl: API_URL,

  paths: {
    root: PROJECT_ROOT,
    src: path.resolve(PROJECT_ROOT, SRC_DIR),
    dist: path.resolve(PROJECT_ROOT, DIST_DIR),
    server: path.resolve(PROJECT_ROOT, SERVER_DIR),
    static: path.resolve(PROJECT_ROOT, STATIC_DIR),
    entryFile: path.resolve(PROJECT_ROOT, SRC_DIR, 'index.js'),
    htmlTemplate: path.resolve(PROJECT_ROOT, SRC_DIR, 'index.html'),
    favicon: path.resolve(PROJECT_ROOT, STATIC_DIR, 'favicon.ico'),
    prod: {
      html: path.resolve(PROJECT_ROOT, DIST_DIR, 'index.html'),
      favicon: path.resolve(PROJECT_ROOT, DIST_DIR, 'favicon.ico'),
    },
  },

  server: {
    hostname: 'localhost',
    port: PORT,
  },

  webpack: {
    output: {
      publicPath: '/',
    },
  },
};

module.exports = merge({}, config, require(`./environments/${NODE_ENV}`));
