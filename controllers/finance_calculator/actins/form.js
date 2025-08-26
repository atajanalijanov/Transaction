const {finacecalculator} = require('../../../models');

module.exports = async (req,res) => {
console.log(req.body);
    try {
        let {
            amount,
            desc,
            is_agree,
        } = req.body

        if (!amount || !desc ) {
            res.status(400).send("aylanyp gal")
            return
        }

        let data = await finacecalculator.create({
            mani: amount,
            desc
        })
        return res.render('finance')
    } catch(error) {
        console.log(error);
        return res.status(500).send(error)
    }
}