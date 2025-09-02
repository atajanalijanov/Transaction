const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth_controller');
const auth_m = require('../middleware/auth');

router.get('/login', controller.getLogin);
router.post('/login', controller.login);
router.get('/register', controller.getRegister);
router.post('/register', controller.register);
router.get('/logout',  auth_m , controller.logout);

module.exports = router;
