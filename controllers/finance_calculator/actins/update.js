const { where } = require("sequelize")
const {Transaction} = require("../../../models")

module.exports = async (req, res) => {
    try {
        let {id} = req.params
        let {title,
            amount,
            type
        } = req.body

        if (!title || !amount) {
            return res.status(400).send("Please write in full.")
        }

        await Transaction.update(
            {
                title,
                amount,
                type
            },
            {
                where: {
                    id
                }
            }
        );

        return res.redirect("/")
    } catch(e) {
        console.log(e);
        return res.status(500).send(e.message)
    }
}