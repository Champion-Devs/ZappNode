const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/memberController.js');
const authController = require('../../controllers/authController.js');

//monitors-- user for operations related to member parent subscriptions------

//delete a monitor from a parent user's subscription array
router.post('/monitor', authController.isLoggedIn, memberController.monitor.create); //placeholder
router.get('/monitor', authController.isLoggedIn, memberController.monitor.read); //placeholder
router.put('/monitor', authController.isLoggedIn, memberController.monitor.update); //placeholder
module.exports = router;
