const express = require("express")
const router = express.Router()
const {finacecalculator} = require("../models")
const controller =require('../controllers/finance_calculator')

router.get("/", async (req,res) =>{
    let finance = await finacecalculator.findAll();
    res.render("finance",{finances})    
})
router.get('/add', (req,res) => {
    res.render('add');
})
router.post('/form', controller.form)

module.exports = router;