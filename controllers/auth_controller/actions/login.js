const {User} = require("../../../models")
const bcrypt = require('bcryptjs')

module.exports = async (req, res) => {
    try {
        let {username, password} = req.body

        if (!username || !password) {
            return res.status(400).send("username or password empty")
        }

        let user = await User.findOne({
            where: {
                username,
            }
        })
        const isCorrect = await bcrypt.compare(password, user.password)

        if (isCorrect) {
            req.session.loggedIn = true
            req.session.userId = user.id
            return res.redirect("/balance/")
        } else {
            return res.status(401).send("username or password wrong")
        }
    } catch(e){
        console.log(e);
        return res.status(500).send(e.message)
    }
}