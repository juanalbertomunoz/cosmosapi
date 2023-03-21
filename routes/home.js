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
 *       - in: body
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
 *           type: string
 *       - in: body
 *         name: gps
 *         description: Ubicación geo espacial de la vivienda
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *              latitud:
 *                type: number  
 *              longitud:
 *                type: number
 *     responses:
 *       '200':
 *         description: Registro de vivienda realizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 key: 
 *                   type: string
 *                 address:
 *                   type: string
 *                 gps:
 *                   type: object
 *                   properties:
 *                     latitud:
 *                       type: number  
 *                     longitud:
 *                       type: number
 *                 estado:
 *                   type: boolean                 
 *   get:
 *     summary: Obtener todas las viviendas registradas.
 *     description: Retorna una lista con la información de todas las viviendas registradas en la base de datos.
 *     responses:
 *       '200':
 *         description: Lista de viviendas obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   key:
 *                     type: string
 *                   address:
 *                     type: string
 *                   gps:
 *                     type: object
 *                     properties:
 *                       latitud:
 *                         type: number  
 *                       longitud:
 *                         type: number 
 *                   estado:
 *                     type: boolean                    
 */


/**
 *  List all homes
 */
router.get("/", homeCtrl.getHomes)


/**
 *  Create home
 */
router.post("/", homeCtrl.createHome)

/**
 *  Update home
 */
router.put("/:id", homeCtrl.updateHome)

module.exports = router