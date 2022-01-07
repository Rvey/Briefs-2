const jwt = require('jsonwebtoken')

const requireGAAuth = (req, res, next) => {

    const token =req.cookies.jwt;
    // check jwt exist
    if (token) {
        jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/GADMINLOGIN')
            } else {
                console.log(decodedToken);
                next()
            }
        })
    } else {
        res.redirect('/GADMINLOGIN')
    }
}
module.exports = { requireGAAuth }