const {Transaction} = require("../../../models")
const { Op } = require("sequelize");

module.exports = async (req, res) => {
    try {
        let userId = req.session.userId

        let {
            year,
            month
        } = req.params

        console.log(year,month);

    const startDate = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0));
    const endDate   = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999));

        console.log(startDate,endDate);

        let transactions = await Transaction.findAll({
            where: {
                userId,
                createdAt: {
                    [Op.between]: [startDate, endDate]
                }
            },
            order: [["createdAt", "DESC"]]
        })
        console.log(transactions,123);

        const income = await Transaction.sum('amount', { where: { type: 'income', userId } }) || 0;
        const expense = await Transaction.sum('amount', { where: { type: 'expense', userId } }) || 0;

        return res.render("balance",{transactions,remaining:income - expense});
    } catch(e) {
        console.log(e);
        return res.status(500).send(e.message)
    }
}