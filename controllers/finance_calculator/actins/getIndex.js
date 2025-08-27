const {Transaction} = require("../../../models")

module.exports = async (req, res) => {
    try {
        let transactions = await Transaction.findAll()

        const income = await Transaction.sum('amount', { where: { type: 'income' } }) || 0;
        const expense = await Transaction.sum('amount', { where: { type: 'expense' } }) || 0;

        return res.render("index",{transactions,remaining:income - expense});
    } catch(e) {
        console.log(e);
        return res.status(500).send(e.message)
    }
}