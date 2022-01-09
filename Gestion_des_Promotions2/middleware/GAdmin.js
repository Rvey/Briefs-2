const jwt = require('jsonwebtoken')

// const checkUser = (req, res,next) => {
//     const token = req.cookies.jwt
// }

const requireGAAuth = (req, res, next ) => {

    const token = req.cookies.jwt;
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
const requireCAAuth = (req, res, next) => {

    const token =req.cookies.jwt;
    const role = req.cookies.role;
    // check jwt exist
    if (token && role == 'CA') {
        jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/CAdminLogin')
            } else {
                console.log(decodedToken);
                next()
            }
        })
    } else {
        res.redirect('/CAdminLogin')
    }
}

const requireRAAuth = (req, res, next) => {

    const token =req.cookies.jwt;
    const role = req.cookies.role;
    // check jwt exist
    if (token && role == 'RA') {
        jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/CRALogin')
            } else {
                console.log(decodedToken);
                next()
            }
        })
    } else {
        res.redirect('/CRALogin')
    }
}

module.exports = { requireGAAuth , requireCAAuth , requireRAAuth }