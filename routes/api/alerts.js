const express = require('express');
const alertController = require('../../controllers/alertController');

const router = express.Router();

router.get('/', alertController);

module.exports = router;
