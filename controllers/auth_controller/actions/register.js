const {User} = require("../../../models")
const bcrypt = require('bcryptjs')

module.exports = async (req, res) => {
    try {
        let {username, password, confirm_password} = req.body

        if (!username || !password || ! confirm_password) {
            return res.status(400).send("username or password empty")
        }

        if (password !== confirm_password) {
            return res.status(400).send("password fail")
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        let user = {
            username,
            password: hashedPassword
        }
        let newUser = await User.create(user)
        req.session.loggedIn = true
        req.session.userId = newUser.id
        return res.redirect("/balance/")
    } catch(e){
        console.log(e);
        return res.status(500).send(e.message)
    }
}