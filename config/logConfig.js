const morgan = require('morgan');
const path = require('path');
const rfs = require('rotating-file-stream');

const accessStream = rfs.createStream('access.log', {
  interval: '1d',
  size: '10M',
  compress: 'gzip',
  path: path.join(__dirname, '../logs'),
});

const accessLog = () => {
  try {
    return morgan('combined', { stream: accessStream });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  accessLog,
};
