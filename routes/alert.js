const express = require("express")
const router = express.Router()
//const authMiddleware = require("../middleware/session")
//const checkRol = require("../middleware/rol")
const alertCtrl = require("../controllers/alert")
//const { validatorCreateZone, validatorGetZone } = require("../validator/zones")

/**
 * create one register Shelly
 */
router.post("/:id/:id2/:id3/", alertCtrl.newAlert)

/**
 *  List alarm specific
 */
router.get("/:id", alertCtrl.getAlert)

module.exports = router