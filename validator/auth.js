const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

/**
 * Validator Register USER
 */

 const validatorRegisterUser = [
    
    check("name").exists().notEmpty().isLength({min:3, max:99}),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min:3, max:15}),
    check("idUser"),
    check("phone"),
    check("role"),
    (req, res, next) => {
    return validateResults(req, res, next)
    }
    
    ]
/**
 * Validator Login USER
 */

    const validatorLogin = [
    
        check("email").exists().notEmpty().isEmail(),
        check("password").exists().notEmpty().isLength({min:3, max:15}),
        (req, res, next) => {
        return validateResults(req, res, next)
        }
        
        ]
    
module.exports = {validatorRegisterUser, validatorLogin}