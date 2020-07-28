const express = require('express');
const router = express.Router();
const monitor_controller = require('../controllers/monitor_controller.js');

//delete monitor from user, takes a user-oid and monitor-oid
router.delete('/monitor', monitor_controller.delete);

module.exports = router;
