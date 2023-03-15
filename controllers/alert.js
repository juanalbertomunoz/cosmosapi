const { handleHttpError } = require("../utils/handleError")
const Alert = require("../models/alerts")
const socketEmit = require("../config/socket")

/**
 * CREATE ALERT AND SEND TO SOCKET
 * @param {*} req 
 * @param {*} res 
 */

const newAlert = async (req, res) => {
  try {
      const data = await Alert.create({key: req.params.id, msm: req.params.id2, mac: req.params.id3})
      socketEmit(req.params.id,req.params.id2,req.params.id3)
      
      res.send({data});
  }catch (e)
  {
   handleHttpError(res, "ERROR_CREATE_CREATE_ALERT");
     
   
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

module.exports = {newAlert}