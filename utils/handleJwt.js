const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET
require('dotenv').config()


/**
 * signig USER
 */
const tokenSign = async (user) => {
const sign = jwt.sign(
    {
        _id: user._id, 
        role: user.role
    },
    JWT_SECRET,
    {
        expiresIn: "2h"
    }
)
return sign
}

/**
 * Verify JsonWebToken
 */

const verifyToken = async (tokenJwt) => {
try{
    return jwt.verify(tokenJwt, process.env.JWT_SECRET)
}catch(e){
    return null
}
}
module.exports = { tokenSign, verifyToken }