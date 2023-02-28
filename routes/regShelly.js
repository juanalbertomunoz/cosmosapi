const express = require("express")
const router = express.Router()
//const authMiddleware = require("../middleware/session")
//const checkRol = require("../middleware/rol")
const regShellyCtrl = require("../controllers/regShelly")
//const { validatorCreateZone, validatorGetZone } = require("../validator/zones")

/**
 * create one register Shelly
 */
router.post("/:id/:id2", regShellyCtrl.newRegShelly)

module.exports = router