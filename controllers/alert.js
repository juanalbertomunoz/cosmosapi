const { handleHttpError } = require("../utils/handleError")
const Alert = require("../models/alerts")
const socketEmit = require("../config/socket")
const getHomesbyid = require("../controllers/home")


/**
 * CREATE ALERT AND SEND TO SOCKET
 * @param {*} req 
 * @param {*} res 
 */

const newAlert = async (req, res) => {
  try {
      //const home= getHomesbyid(req.params.id)
      //console.log(home)
      const data = await Alert.create({key: req.params.id, msm: req.params.id2, mac: req.params.id3})
      socketEmit(data)
      //socketEmit(req.params.id,req.params.id2,req.params.id3)
      
      res.send({data});
  }catch (e)
  {
   handleHttpError(res, "ERROR_CREATE_CREATE_ALERT");
     
   
  }
}

/**
 * GET ALERT BY KEY
 * @param {*} req 
 * @param {*} res 
 */
const getAlert = async (req, res) => {
  try{

    //req = matchedData(req)
    //const {id} = req.params.id
    const id = req.params.id
    //console.log(id)
    const data = await Alert.find({
      key :  id
    })
    console.log ([data])
    res.send([ data ])
  }catch(e){
    handleHttpError(res, "ERROR_GET_ALERT_HOME")
  }
}

/**
 * Update cuvi
 * @param {*} req 
 * @param {*} res 
 */
const updateAlert = async (req, res) => {
  try {
    //const body = matchedData(req)
    //const body = req.body
    //console.log("body", body)
    //const bodyclean = req.body
    const data = await Alert.findByIdAndUpdate(req.params.id, req.body)
    console.log("data", data)
    res.send({ data })
    } catch (e) {
      console.log(e)
      handleHttpError(res, "ERROR_UPDATE_ALARM")
    }
  
}


/*
const io = require("socket.io")(3002);

io.on('connection', (socket) => {
  console.log('Una alerta ha llegado');
});

const newAlert = async (req, res) => {
  try {
    const param1 = req.params.id;
    const param2 = req.params.id2;
    const param3 = req.params.id3;
    io.emit('alertsecurity', { param1, param2, param3 });
    console.log(param1);
    res.sendStatus(200);

      
  }catch (e)
   {
    //console.log(e)
    handleHttpError(res, "ERROR_CREATE_SHELLY_REGISTER");
      
    
}
}*/

module.exports = {newAlert, getAlert, updateAlert}