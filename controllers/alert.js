const { handleHttpError } = require("../utils/handleError")
const Alert = require("../models/alerts")
const socketEmit = require("../config/socket")
const getHomesbyid = require("../controllers/home")
const app = require("../index")
const socketIO = require("socket.io")
const http = require("http")
const server = http.createServer(app);
const io = socketIO(server);


io.on("connection", (socket) => {
  console.log("A client connected to the socket.io server");
});
/**
 * CREATE ALERT AND SEND TO SOCKET
 * @param {*} req 
 * @param {*} res 
 */

const newAlert = async (req, res) => {
  try {
      //const home= getHomesbyid(req.params.id)
      //console.log(home)
      //const { param1, param2, param3 } = req.params;
      const data = await Alert.create({key: req.params.id, msm: req.params.id2, mac: req.params.id3})
     // console.log(data)

      //Envia los parametros a travez del socket io
      io.emit('alertsequrete', data);
      res.send({data})
      //socketEmit(data)
      
      //socketEmit(req.params.id,req.params.id2,req.params.id3)
      
     // res.send({data});
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
      key :  id,
      estado: false
    })
    console.log (data)
    res.send(data)
  }catch(e){
    handleHttpError(res, "ERROR_GET_ALERT_HOME")
  }
}

/**
 * Update Alert
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


module.exports = {newAlert, getAlert, updateAlert}