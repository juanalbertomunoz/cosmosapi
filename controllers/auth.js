const {matchedData} = require("express-validator")
const {tokenSign} = require ("../utils/handleJwt")
const {handleHttpError} = require ("../utils/handleError")
const usersModels = require("../models/users")
const { encrypt, compare } = require("../utils/handlePassword")


/**
 * controller user register
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async (req, res) => {
try{

     req = matchedData(req)
    const password = await encrypt(req.password)
     const body = {...req, password}
     //const data = await usersModels.save(body)
     const newuser = new usersModels(body)
     const dataUser = await newuser.save()
     dataUser.set("password", undefined, { strict: false })//quita campo contraseña al data para el frontend
     
     const data = {
         token : await tokenSign(dataUser),
         user : dataUser
     }
     res.send({data})
    }catch(e){
        handleHttpError (e, "ERROR_REGISTER_USER")
    }
 }

 /**
  * controlle login user
  * @param {*} req 
  * @param {*} res 
  */
 const loginCtrl = async (req, res) => {
    try{
        req = matchedData(req)
        const user = await usersModels.findOne({email:req.email})
        .select('password name role email')
        if(!user){
            handleHttpError(res, "USER_NOT_EXIST", 401)
            return
        }
        const hashPassword = user.password
        const check = await compare(req.password, hashPassword)
        if(!check){
            handleHttpError(res, "PASSWORD_INVALID", 402)
            return
        }
        user.set('password',undefined, {strict:false})
        const data = {
            token:await tokenSign(user),
            user
        }

        res. send({data})
    }catch(e){
        handleHttpError(res, "ERROR_LOGIN_USER")
    }
 }
 
 module.exports = {registerCtrl, loginCtrl}
 
 