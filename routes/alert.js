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
