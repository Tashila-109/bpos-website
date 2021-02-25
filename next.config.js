const path = require('path');

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // Target must be serverless
  target: 'serverless',
};
