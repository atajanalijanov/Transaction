const {Transaction} = require('../../../models');

module.exports = async (req,res) => {
console.log(req.body);
    try {
        let {
            title,
            amount,
            type
        } = req.body

        if (!amount || !title ) {
            res.status(400).send("Please write in full.")
            return
        }
        
        let data = await Transaction.create({
            title,
            amount,
            type: type ? 'income' : 'expense'
        })
        return res.redirect("/")
    } catch(error) {
        console.log(error);
        return res.status(500).send(error)
    }
}