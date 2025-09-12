const express = require('express');
const router = express.Router();
const controller = require('../controllers/finance_calculator');

router.get("/", controller.finance);
router.get('/add', controller.add);
router.post('/form', controller.pastForm);
router.get('/edit/:id', controller.edit);
router.post('/update/:id', controller.update);
router.get('/delete/:id', controller.remove);
router.get('/calendar/:year/:month', controller.calendar);

module.exports = router;