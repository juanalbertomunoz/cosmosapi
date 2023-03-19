const { handleHttpError } = require("../utils/handleError")
const Alert = require("../models/alerts")
const io = require('../config/socket');
const app = require("../index")

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
    io.emit('alertsequrete', data);
    res.send({data});
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