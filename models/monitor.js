const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Enables different schemas under same collection
const options = {
	discriminatorKey: 'type',
};

const MonitorSchema = new Schema(
	{
		name: { type: String, required: true },
		interval: Number,
	},
	options
);

const Monitor = mongoose.model('Monitor', MonitorSchema);

const URLMonitor = Monitor.discriminator(
	'URL',
	new mongoose.Schema(
		{
			url: String,
		},
		options
	)
);

const PortMonitor = Monitor.discriminator(
	'Port',
	new mongoose.Schema(
		{
			url: String,
			port: Number,
		},
		options
	)
);

const KeywordMonitor = Monitor.discriminator(
	'Keyword',
	new mongoose.Schema(
		{
			url: String,
			keyword: String,
			login: String,
			password: String,
		},
		options
	)
);

const PingMonitor = Monitor.discriminator(
	'Ping',
	new mongoose.Schema(
		{
			IP: String,
		},
		options
	)
);

module.exports = {
	URLMonitor: URLMonitor,
	PingMonitor: PingMonitor,
	KeywordMonitor: KeywordMonitor,
	Monitor: Monitor,
	PortMonitor: PortMonitor,
};
