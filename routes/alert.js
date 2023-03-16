const express = require("express")
const router = express.Router()
//const authMiddleware = require("../middleware/session")
//const checkRol = require("../middleware/rol")
const alertCtrl = require("../controllers/alert")
//const { validatorCreateZone, validatorGetZone } = require("../validator/zones")

/**
 * @swagger
 * /api/alerts:
 *   get:
 *     summary: Obtener las alertas activas de una vivienda.
 *     description: Devuelve un arreglo con las alertas activas de la vivienda.
 *     parameters:
 *       - in: url
 *         name: _id
 *         description: Identificador unico de la vivienda
 *         required: true
 *         unique: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Lista de alertas de viviendas obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   key:
 *                     type: string
 *                   msm:
 *                     type: string
 *                   mac:
 *                     type: string 
 *                   address:
 *                     type: string                
 */
/**
 * create one register Shelly
 */
router.post("/:id/:id2/:id3/", alertCtrl.newAlert)

/**
 *  List alarm specific
 */
router.get("/:id", alertCtrl.getAlert)

/**
 *  Update alert
 */
router.put("/:id", alertCtrl.updateAlert)

module.exports = router