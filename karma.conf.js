'use strict';

var path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    //frameworks: ['jasmine'],
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'test/helpers/**/*.js',
      'test/spec/components/**/*.js',
      'test/spec/stores/**/*.js',
      'test/spec/actions/**/*.js'
    ],
    preprocessors: {
      'test/spec/components/**/*.js': ['webpack'],
      'test/spec/stores/**/*.js': ['webpack'],
      'test/spec/actions/**/*.js': ['webpack']
    },
    webpack: {
      cache: true,
      module: {
        loaders: [{
          test: /\.gif/,
          loader: 'url-loader?limit=10000&mimetype=image/gif'
        }, {
          test: /\.jpg/,
          loader: 'url-loader?limit=10000&mimetype=image/jpg'
        }, {
          test: /\.png/,
          loader: 'url-loader?limit=10000&mimetype=image/png'
        }, {
          test: /\.js$/,
          loader: 'babel-loader'
        }, {
          test: /\.scss/,
          loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }, {
          test: /\.jsx$/,
          loaders: ['react-hot', 'jsx-loader?harmony']
        }, {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
        }]
      },
      resolve: {
        alias: {
          'styles': path.join(process.cwd(), './src/styles/'),
          'components': path.join(process.cwd(), './src/components/'),
          'stores': '../../../src/stores/',
          'actions': '../../../src/actions/'
        }
      }
    },
    webpackServer: {
      stats: {
        colors: true
      }
    },
    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: false,
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],
    reporters: ['progress'],
    captureTimeout: 60000,
    browserNoActivityTimeout: 100000,
    singleRun: true
  });
};
