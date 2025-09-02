const express = require("express")
const router = express.Router()

const balance = require('./balans');
const auth = require('./auth');
const auth_m = require('../middleware/auth')

router.use("/balance", auth_m, balance)
router.use("/auth", auth)
router.use("/", (req, res) => {
    return res.render("index")
})

module.exports = router;