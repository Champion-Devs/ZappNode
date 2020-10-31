const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Enables different schemas under same collection
const options = {
  discriminatorKey: 'type',
};

const MonitorSchema = new Schema(
  {
    title: { type: String, required: true },
    created_at: { type: Date },
    active: { type: Boolean, default: true },
    isUp: { type: Boolean, default: true },
    paused: { type: Boolean, default: false },
    totalRequests: { type: Number, default: 0 },
    lastRequest: { type: Date },
    totalDownTimes: { type: Number, default: 0 },
    lastDownTime: { type: Date },
    interval: { type: Number, default: 5 },
  },
  options,
);

const Monitor = mongoose.model('Monitor', MonitorSchema);

const HTTPMonitor = Monitor.discriminator(
  'URL',
  new mongoose.Schema(
    {
      url: String,
    },
    options,
  ),
);

const PortMonitor = Monitor.discriminator(
  'Port',
  new mongoose.Schema(
    {
      host: String,
      port: Number,
    },
    options,
  ),
);

const KeywordMonitor = Monitor.discriminator(
  'Keyword',
  new mongoose.Schema(
    {
      url: String,
      keyword: String,
      username: String,
      password: String,
    },
    options,
  ),
);

const PingMonitor = Monitor.discriminator(
  'Ping',
  new mongoose.Schema(
    {
      host: String,
    },
    options,
  ),
);

module.exports = {
  HTTPMonitor: HTTPMonitor,
  PingMonitor: PingMonitor,
  KeywordMonitor: KeywordMonitor,
  Monitor: Monitor,
  PortMonitor: PortMonitor,
};
