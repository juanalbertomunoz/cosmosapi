const express = require("express")
const router = express.Router()
//const updateval = require("../middleware/updateval")
//const authMiddleware = require("../middleware/session")
//const checkRol = require("../middleware/rol")
const homeCtrl = require("../controllers/home")
//const { validatorCreateCuvi, validatorGetCuvi, val_Data_Update } = require("../validator/cuvis")


 
/**
 * @swagger
 * /api/homes:
 *   post:
 *     summary: Registra una vivienda nueva.
 *     description: Retorna la información de la vivienda registrada.
 *     parameters:
 *       - in: query
 *         name: key
 *         description: Identificador unico de la vivienda
 *         required: true
 *         unique: true
*         schema:
 *           type: string
 *       - in: body
 *         name: address
 *         description: Direccion fisica con nomenclatura como en la factura
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             latitud:
 *              type: number  
 *             longitud:
 *              type: number
 *     responses:
 *       '200':
 *         description: Registro de vivienda realizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               
 *               type: object
 *               properties:
 *                 key: 
 *                  type: string
 *                 address:
 *                  type: object
 *                   
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
/**
 *  List all cuvis
 */
router.get("/", homeCtrl.getHomes)


/**
 *  Create home
 */
router.post("/", homeCtrl.createHome)


module.exports = router