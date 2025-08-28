const {Transaction} = require("../../../models")

module.exports = async (req, res) => {
    try {
        let {id} = req.params
        let transaction = await Transaction.findOne({id})
        console.log(transaction);
        console.log(id);
        
        return res.render("edit",{transaction});
    } catch(e) {
        console.log(e);
        return res.status(500).send(e.message)
    }
}