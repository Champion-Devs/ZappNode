const express = require('express');
const router = express.Router();
const monitor_controller = require('../controllers/monitor_controller.js');

router.delete('/:id', monitor_controller.delete);
module.exports = router;
