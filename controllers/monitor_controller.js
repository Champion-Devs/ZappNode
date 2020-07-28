const userModel = require('../models/user');

module.exports = {
	//updates the user by it's oid, and pulls the monitor from the array by oid
	delete: (req, res) => {
		const { user_oid, monitor_oid } = req.body;
		userModel.findOneAndUpdate(
			{ _id: user_oid },
			{
				$pull: { monitors: { _id: monitor_oid } },
			}
		);
	},
};
