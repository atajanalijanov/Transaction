const express = require("express")
const router = express.Router()
const {finacecalculator} = require("../models")
const controller =require('../controllers/finance_calculator')

router.get("/", controller.index)
router.get('/add', controller.add)
router.post('/form', controller.pastForm)
router.get('/edit/:id', controller.edit)
router.post('/update/:id', controller.update)
router.get('/delete/:id', controller.remove)

module.exports = router;