const {Transaction} = require("../../../models")
const { Op } = require("sequelize");

module.exports = async (req, res) => {
    try {
        let userId = req.session.userId

        let {
            year,
            month
        } = req.params

    const startDate = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0));
    const endDate   = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999));

        let transactions = await Transaction.findAll({
            where: {
                userId,
                createdAt: {
                    [Op.between]: [startDate, endDate]
                }
            },
            order: [["createdAt", "DESC"]]
        })

        const income = await Transaction.sum('amount', { where: { type: 'income', userId,createdAt: {[Op.between]: [startDate, endDate]}} }) || 0;
        const expense = await Transaction.sum('amount', { where: { type: 'expense', userId,createdAt: {[Op.between]: [startDate, endDate]} } }) || 0;
        let monthName = '';
        if(month == 1) { monthName = 'Yanwar'}
        if(month == 2) { monthName = 'Fewral'}
        if(month == 3) { monthName = 'Mart'}
        if(month == 4) { monthName = 'Aprel'}
        if(month == 5) { monthName = 'May'}
        if(month == 6) { monthName = 'Iyun'}
        if(month == 7) { monthName = 'Iyul'}
        if(month == 8) { monthName = 'Awgust'}
        if(month == 9) { monthName = 'Sentyabr'}
        if(month == 10) { monthName = 'Oktyabr'}
        if(month == 11) { monthName = 'Noyabr'}
        if(month == 12) { monthName = 'Dekabr'}
        return res.render("calendar",{transactions,remaining:income - expense,monthName});
    } catch(e) {
        console.log(e);
        return res.status(500).send(e.message)
    }
}