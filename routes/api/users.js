const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController.js');
const authController = require('../../controllers/authController.js');

//monitors-- user for operations related to user subscriptions------

//delete a monitor from a user's subscription array
router.post('/monitor', userController.monitor.create); //placeholder
router.get('/monitor', userController.monitor.read); //placeholder
router.put('/monitor', userController.monitor.update); //placeholder
router.delete('/monitor', userController.monitor.delete);

//members-- user for operations related to children/members------

router.post('/member', userController.member.create); //placeholder
router.get('/member', userController.member.read); //placeholder
router.put('/member', userController.member.update); //placeholder
router.delete('/member', userController.member.delete);

//users -- use for operations related to more static user information

router.post('/', userController.user.create); //placeholder
router.get('/', userController.user.read); //placeholder
router.patch('/', authController.isLoggedIn, userController.user.update);
router.delete('/', authController.isLoggedIn, userController.user.delete);
module.exports = router;
