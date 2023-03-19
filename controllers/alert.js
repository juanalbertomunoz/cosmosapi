const { handleHttpError } = require("../utils/handleError")
const Alert = require("../models/alerts")
const socketEmit = require("../config/socket")
const getHomesbyid = require("../controllers/home")
const app = require("../index")
//const socketIO = require("socket.io")
const http = require("http")
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});
//const io = socketIO(server);


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
    const data = await Alert.create({key: req.params.id, msm: req.params.id2, mac: req.params.id3});
    io.emit('alertsequrete', data, (error) => {
      if (error) {
        console.error(error);
        handleHttpError(res, "ERROR_EMITTING_ALERT...");
      } else {
        res.send({data});
      }
    });
  } catch (e) {
    console.error(e);
    handleHttpError(res, "ERROR_CREATE_CREATE_ALERT...");
  }
};


const getAlert = async (req, res) => {
  try{
    const id = req.params.id;
    const data = await Alert.find({
      key :  id,
      estado: false
    }).catch((e) => {
      console.error(e);
      handleHttpError(res, "ERROR_GET_ALERT_HOME");
    });
    console.log (data)
    res.send(data)
  }catch(e){
    console.error(e);
    handleHttpError(res, "ERROR_GET_ALERT_HOME");
  }
}

const updateAlert = async (req, res) => {
  try {
    const data = await Alert.findByIdAndUpdate(req.params.id, req.body).catch((e) => {
      console.error(e);
      handleHttpError(res, "ERROR_UPDATE_ALARM");
    });
    res.send({ data })
  } catch (e) {
    console.error(e);
    handleHttpError(res, "ERROR_UPDATE_ALARM");
  }
};


module.exports = {newAlert, getAlert, updateAlert}
