const jwt = require('jsonwebtoken')

const requireGAAuth = (req, res, next) => {

    const token =req.cookies.jwt;
    const role = req.cookies.role;
    // check jwt exist
    if (token && role == 'GA') {
        jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/GAdminLogin')
            } else {
                console.log(decodedToken);
                next()
            }
        })
    } else {
        res.redirect('/GAdminLogin')
    }
}
module.exports = { requireGAAuth }