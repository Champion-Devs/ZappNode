const { monitor } = require('./userController');
monitor.delete = async (req, res) => {
  try {
    res.status(400).json({ message: 'Monitor deletion by member not allowed, contact administrator' });
  } catch (err) {
    throw err;
  }
};
module.exports = { monitor };
