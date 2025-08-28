const {Transaction} = require("../../../models")

module.exports = async (req, res) => {
    try {
        let id = req.params.id

        await Transaction.destroy({
            where: {
                id
            }
        })

        return res.redirect("/")

    } catch(e) {
        console.log(e);
        res.status(500).send(e.message)
    }
}