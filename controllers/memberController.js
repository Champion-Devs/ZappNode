const { monitor } = require('./userController');

const memberMonitor = {
  create: monitor.create,
  read: monitor.read,
  update: monitor.update,
  delete: async (req, res) => {
    try {
      res.status(400).json({ message: 'Monitor deletion by member not allowed, contact administrator' });
    } catch (err) {
      throw err;
    }
  },
};
module.exports = { memberMonitor };
