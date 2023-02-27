const express = require("express")
//const { matchedData } = require("express-validator")
const router = express.Router()
const { validatorRegisterUser, validatorLogin } = require("../validator/auth")
const { loginCtrl, registerCtrl } =  require("../controllers/auth")

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registra un usuario nuevo.
 *     description: Retorna la información del usuario registrado, validando el `email` y el `id`.
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: email
 *         required: true
 *         unique: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: password
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: idUser
 *         required: true
 *         schema:
 *           type: number  
 *       - in: query
 *         name: phone
 *         required: true
 *         schema:
 *           type: number   
 *       - in: query
 *         name: role
 *         required: true
 *         schema:
 *           type: string       
 *     responses:
 *       '200':
 *         description: Registro de usuario realizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               
 *               type: object
 *               properties:
 *                 name: 
 *                  type: string
 *                 email:
 *                  type: string
 *                 password:
 *                  type: string
 *                 idUser:
 *                  type: number
 *                 phone: 
 *                  type: number
 *                 role:
 *                  type: string 
 * /api/auth/login:
 *   post:
 *     summary: logea un usuario registrado.
 *     description: Retorna la información del usuario logeado, validando el `email` y el `password`.
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: password
 *         required: true
 *         schema:
 *           type: string 
 * 
 *                  
 */
router.post("/register", validatorRegisterUser, registerCtrl)
router.post("/login", validatorLogin, loginCtrl)


module.exports = router