const monitorModel = require('../models/user');

module.exports = {
	//delete a monitor given it's id
	delete: (req, res) => {
		const _id = req.params.id;
		monitorModel.findByIdAndDelete({ _id: _id }).exec((err, success) => {
			if (err) throw err;
			res.json(success);
		});
	},
};
