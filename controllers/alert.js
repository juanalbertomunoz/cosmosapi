const { handleHttpError } = require("../utils/handleError")
//const {server} = require('../index');
const Alert = require("../models/alerts")
//const {server} = require('../index');

const io = require('../config/socket')

//const io = Server();
//const io = require('../index')


/**
 * CREATE ALERT AND SEND TO SOCKET
 * @param {*} req 
 * @param {*} res 
 */
const newAlert = async (req, res) => {
  try {
    const data = await Alert.create({key: req.params.id, msm: req.params.id2, mac: req.params.id3});
    res.send('Ok')
    console.log('ALERT SAVE')
    try{
      
      console.log(io.emit('alertsequrete', {data})); // emit an event to all connected sockets
      console.log('ALERT SEND');
    }
  catch (e) {
    console.error(e);
    handleHttpError(res, "ERROR_EMIT_ALERT...");
  }
    //emitalert (data);    res.send({data});
  } catch (e) {
    console.error(e);
    handleHttpError(res, "ERROR_CREATE_CREATE_ALERT...");
  }
};

const getAlert = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Alert.find({ key: id, estado: false });
    console.log(data)
    res.send(data)
  } catch (e) {
    console.error(e);
    handleHttpError(res, "ERROR_GET_ALERT_HOME");
  }
}

const updateAlert = async (req, res) => {
  try {
    const data = await Alert.findByIdAndUpdate(req.params.id, req.body);
    res.send({ data })
  } catch (e) {
    console.error(e);
    handleHttpError(res, "ERROR_UPDATE_ALARM");
  }
};

module.exports = { newAlert, getAlert, updateAlert }
