const { handleHttpError } = require("../utils/handleError")
const Reg = require("../models/reg")


const newRegShelly = async (req, res) => {
    try {
     // const { user } = req;
      console.log("user _id: ", req.user._id)
//console.log(req.user)
   req.body.id_User = req.user._id //capture the _id user and push in to the zone new
      //req.body.estado = true
     // console.log("body: ", req.heathers)
        //const body = matchedData(req)
const body = req

        const data = await Reg.create(body)

 /*
        const newZone = new Zonebody)
        const data = await newZone.save()
   */   
        res.send({ data});
      } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_CREATE_SHELLY_REGISTER");
      }
    
}

module.exports = {newRegShelly}