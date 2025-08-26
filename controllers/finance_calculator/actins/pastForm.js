const {Transaction} = require('../../../models');
const tape = require('../../../public/click');

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
            type:tape
        })
        return res.redirect("/")
    } catch(error) {
        console.log(error);
        return res.status(500).send(error)
    }
}