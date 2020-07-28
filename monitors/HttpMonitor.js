const http = require('http');
const https = require('https');
const url = require('url');
const utils = require('./Utlis');
const NS_PER_SEC = 1e9;

module.exports = function (opts, callback) {
  const options = Object.assign(url.parse(opts.website), opts.httpOptions);

  let req;
  let startTime = process.hrtime();

  if (opts.website.indexOf('https:') === 0) {
    req = https.request(options, (res) => {
      let diff = process.hrtime(startTime);
      let responseTime = utils.nanoToMilliseconds(
        diff[0] * NS_PER_SEC + diff[1]
      );

      let data = {
        website: opts.website,
        responseTime: responseTime,
      };

      callback(false, data, res);
    });
  } else {
    req = http.request(options, (res) => {
      let diff = process.hrtime(startTime);
      let responseTime = utils.nanoToMilliseconds(
        diff[0] * NS_PER_SEC + diff[1]
      );

      let data = {
        website: opts.website,
        responseTime: responseTime,
      };

      callback(false, data, res);
    });
  }

  req.on('error', (err) => {
    let diff = process.hrtime(startTime);
    let responseTime = utils.nanoToMilliseconds(diff[0] * NS_PER_SEC + diff[1]);

    let data = {
      website: opts.website,
      responseTime: responseTime,
    };

    callback(err, data, {
      statusCode: 500,
    });
  });

  req.on('timeout', () => {
    let diff = process.hrtime(startTime);
    let responseTime = utils.nanoToMilliseconds(diff[0] * NS_PER_SEC + diff[1]);

    let data = {
      website: opts.website,
      responseTime: responseTime,
      timeout: true,
    };

    callback(new Error('Request timeout'), data, {
      statusCode: 500,
    });
  });

  if (
    opts.httpOptions.method &&
    opts.httpOptions.method.toLocaleLowerCase() === 'post' &&
    opts.httpOptions.body
  ) {
    req.write(JSON.stringify(opts.httpOptions.body));
  }

  // if user has specified request timeout, manually destroy
  if (opts.httpOptions.timeout) {
    req.setTimeout(opts.httpOptions.timeout, function () {
      req.abort ? req.abort() : req.destroy();
    });
  }

  req.end();
};
