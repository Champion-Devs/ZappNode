const config = require('config');
let mailgun = require('mailgun-js')({
  apiKey: config.get('api_key'),
  domain: config.get('domain'),
});

module.exports = {
  mailgun: mailgun,
  email: config.get('email'),
};
