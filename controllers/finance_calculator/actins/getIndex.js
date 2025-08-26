const {Transaction} = require("../../../models")

module.exports = async (req, res) => {
    try {
        let transactions = await Transaction.findAll()

        return res.render("index",{transactions});
    } catch(e) {
        console.log(e);
        return res.status(500).send(e.message)
    }
}