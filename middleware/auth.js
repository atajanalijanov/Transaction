module.exports = (req, res, next) => {
	if (req.session.loggedIn) {
		next();
	} else {
		return res.redirect(`/auth/login`)
	}
};