const util = require('util');
const EventEmitter = require('events').EventEmitter;
const httpMonitor = require('./HttpMonitor');
const utils = require('./Utlis');

function Monitor(opts, state) {
  EventEmitter.call(this);

  // Setting up constructor
  this.id = null;
  this.created_at = null;
  this.title = '';
  this.method = 'GET';
  this.website = null;
  this.address = null;
  this.host = null;
  this.interval = 5;
  this.port = null;
  this.handle = null;
  this.active = true;
  this.isUp = true;
  this.paused = false;
  this.totalRequests = 0;
  this.totalDownTimes = 0;
  this.lastDownTime = null;
  this.lastRequest = null;
  this.httpOptions = {};
  this.expect = {
    statusCode: 200,
  };

  // initialize the app
  this.init(opts, state);
  return this;
}

// Inherit from EventEmitter
util.inherits(Monitor, EventEmitter);

// Initial validation
Monitor.prototype.init = function (opts, state) {
  this.setProperties(opts, state);

  if (!this.website && !this.address) {
    return this.emit(
      'error',
      new Error('You did not specify a website to monitor')
    );
  } else if (this.website && this.address) {
    return this.emit(
      'error',
      new Error('You can only specify either a website or a tcp address')
    );
  }

  if (!this.active) {
    /*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
    return console.log(`${this.title} monitor is off`);
  }

  // start monitoring
  if (this.website) {
    this.start('http');
  } else {
    this.start('tcp');
  }
};

Monitor.prototype.setProperties = function (opts, state) {
  const defaultState = this.getState();
  const currentState = Object.assign(defaultState, opts, state || {});

  currentState.host = currentState.website || currentState.address;

  //   if (!currentState.created_at) {
  //     currentState.created_at = Date.now();
  //   }

  this.setState(currentState);
};

Monitor.prototype.setState = function (state) {
  Object.keys(state).forEach((key) => {
    this[key] = state[key];
  });
};

Monitor.prototype.getState = function () {
  return {
    id: this.id,
    title: this.title,
    created_at: this.created_at,
    isUp: this.isUp,
    website: this.website,
    address: this.address,
    host: this.host,
    port: this.port,
    totalRequests: this.totalRequests,
    totalDownTimes: this.totalDownTimes,
    lastDownTime: this.lastDownTime,
    lastRequest: this.lastRequest,
    interval: this.interval,
    active: this.active,
    httpOptions: this.httpOptions,
    expect: this.expect,
  };
};

Monitor.prototype.start = function (method) {
  let host = this.website || this.address + ':' + this.port;
  let startTime = utils.getFormatedDate();

  const ONE_MINUTE = 60 * 1000;
  const INTERVAL = this.interval * ONE_MINUTE;

  /*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
  console.log(`\nMonitoring:${host}\nTime: ${startTime}\n`);

  if (method === 'http') {
    this.pingHTTP();

    // create an interval for pings
    this.handle = setInterval(() => {
      this.pingHTTP();
    }, INTERVAL);
  } else {
    this.pingTCP();

    // create an interval for pings
    this.handle = setInterval(() => {
      this.pingTCP();
    }, INTERVAL);
  }
};
