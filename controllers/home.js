const homeCtrl = {}
const Home = require("../models/homes")
//const { matchedData } = require("express-validator")
//const { handleHttpError } = require("../utils/handleError")
//const { isObjectIdOrHexString } = require("mongoose")

/**
 * get curriculum vitae
 * @param {*} req 
 * @param {*} res 
 */
const getHomes = async (req, res) => {
    try{
      const user = req.res
      
        const homes = await Home.find()
          res.json(homes)
          res.send({ data, user})
    }catch(e){
        //res.send({data})
        handleHttpError(e, 'Error_get_homes')
    }
    
}

/* create home
 * @param {*} req 
 * @param {*} res 
 */
const createHome = async (req, res) => {
    try {
        //const body = matchedData(req)
        const body = req
        const data = await Home.create(body)

         res.send({ data});
      } catch (e) {
        console.log(e)
        handleHttpError(e, "ERROR_CREATE_HOME");
      }
    
}

module.exports = {getHomes, createHome}
