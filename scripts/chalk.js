/* eslint-disable import/no-extraneous-dependencies */

try {
  module.exports = require('chalk');
}
catch (ex) {
  module.exports = {
    cyan: v => v,
    green: v => v,
    magenta: v => v,
    red: v => v,
  };
}
