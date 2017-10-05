const path = require('path');

const config = {
  entry: './src/renderers/dom.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
