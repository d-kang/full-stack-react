const path = require('path');

const config = {
  entry: './src/renderers/dom.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  }
};

module.exports = config;
