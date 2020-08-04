const morgan = require('morgan');
const path = require('path');
const rfs = require('rotating-file-stream');

const accessStream = rfs.createStream('access.log', {
  interval: '1d',
  size: '10M',
  compress: 'gzip',
  path: path.join(__dirname, '../logs'),
});

const errorStream = rfs.createStream('error.log', {
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

//logs 4xx and 5xx responses to error.log
const errorLog = () => {
  try {
    return morgan('combined', {
      skip: function (req, res) {
        return res.statusCode < 400;
      },
      stream: errorStream,
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  accessLog,
  errorLog,
};
