const {Transaction} = require('../../../models');

module.exports = async (req,res) => {
    try {
        let {
            title,
            amount,
            type,
            date
        } = req.body

        let userId = req.session.userId

        if (!amount || !title ) {
            res.status(400).send("Please write in full.")
            return
        }

        let data = await Transaction.create({
            title,
            userId,
            amount,
            type: type ? 'income' : 'expense',
            createdAt: date
        })
        return res.redirect("/balance/")
    } catch(error) {
        console.log(error);
        return res.status(500).send(error)
    }
}