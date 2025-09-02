const { where } = require("sequelize");
const {Transaction} = require("../../../models")

module.exports = async (req, res) => {
    try {
        let userId = req.session.userId
        let transactions = await Transaction.findAll({
            where: {
                userId,
            }
        })
        console.log(transactions);
        
        const income = await Transaction.sum('amount', { where: { type: 'income', userId } }) || 0;
        const expense = await Transaction.sum('amount', { where: { type: 'expense', userId } }) || 0;

        return res.render("balance",{transactions,remaining:income - expense});
    } catch(e) {
        console.log(e);
        return res.status(500).send(e.message)
    }
}