const { resolve } = require('path');
const config = require('../webpack.config');

module.exports = {
  ...config,
  entry: resolve(__dirname, 'src'),
};
