const { handleHttpError } = require("../utils/handleError")
const homeControler = require('../controllers/home')
//const {server} = require('../index');
const Alert = require("../models/alerts")
//const {server} = require('../index');

//const io = require('../config/socket');
//const {emitSocket} = require("../index");

//const io = Server();


/**
 * CREATE ALERT AND SEND TO SOCKET
 * @param {*} req 
 * @param {*} res 
 */
const newAlert = async (req, res) => {
  try {
    const data = await Alert.create({ key: req.params.id, msm: req.params.id2, mac: req.params.id3 });
    res.send('Ok')
    console.log('ALERT SAVE', data)
    return data
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
  const key = req.body.key;
  try {
    const data = await Alert.findByIdAndUpdate(req.params.id, req.body);
    const alertsFalse = await Alert.findOne({ key: req.body.key, estado: false })
    console.log('resultado busqueda', alertsFalse)
    if (alertsFalse) {

      res.send({ data })

    }

    else {
      console.log('no existen alertas en false')
      req.body = { estado: false }
      req.params.id = key
      console.log('body', req.body)
      const homeData = await homeControler.updateHome(req, res);
      console.log('homeData', homeData)
      res.send({ data })
    }
  } catch (e) {
    console.error(e);
    handleHttpError(res, "ERROR_UPDATE_ALARM");
  }
};

module.exports = { newAlert, getAlert, updateAlert }
