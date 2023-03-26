const express = require("express")
const router = express.Router()
const alertCtrl = require("../controllers/alert")


/**
 * 
 */

/**
 * create one register Shelly
 */
//router.post("/:id/:id2/:id3/", alertCtrl.newAlert)

/**
 *  List alarm specific
 */
router.get("/:id", alertCtrl.getAlert)

/**
 *  Update alert
 */
router.put("/:id", alertCtrl.updateAlert)

module.exports = router
/**
 * @swagger
 * /api/alerts/{key}/{msm}/{mac}:
 *   post:
 *     summary: Registra una nueva alerta.
 *     description: Retorna un Ok.
 *     parameters:
 *       - in: path
 *         name: key
 *         description: Identificador de la vivienda.
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: msm
 *         description: Mensaje con posición y alerta del sensor.
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: mac
 *         description: Identificador único del sensor.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Alerta guardada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Alert'
 * 
 * /api/alerts/{key}:
 *   get:
 *     summary: Obtener todas las alertas de la vivienda que no estén atendidas.
 *     description: Retorna una lista con la información de todas las alertas que no se han atendido de la vivienda.
 *     parameters:
 *       - in: path
 *         name: key
 *         description: Identificador de la vivienda.
 *         required: true
 *         schema:
 *           type: string    
 *     responses:
 *       '200':
 *         description: JSON de la alerta.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Alert'
 * 
 * /api/alerts/{_id}:
 *   put:
 *     summary: Actualizar la alerta correspondiente.
 *     description: Actualiza la alerta en los campos `description` y `estado`.
 *     parameters:
 *       - in: path
 *         name: _id
 *         description: Identificador único de la alerta.
 *         required: true
 *         schema:
 *           type: string
 *       - in: body
 *         name: alert
 *         description: Información de la alerta a actualizar.
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/AlertInput'
 *     responses:
 *       '200':
 *         description: JSON de la alerta actualizada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Alert'
 * 
 * components:
 *   schemas:
 *     Alert:
 *       type: object
 *       properties:
 *         key: 
 *           type: string
 *         msm:
 *           type: string
 *         mac:
 *           type: string
 *         description: 
 *           type: string
 *         estado:
 *           type: boolean 
 *     AlertInput:
 *       type: object
 *       properties:
 *         key:
 *           type: string
 *         description:
 *           type: string
 *         estado:
 *           type: boolean
 *       required:
 *         - key
 *         - description
 *         - estado
 */


