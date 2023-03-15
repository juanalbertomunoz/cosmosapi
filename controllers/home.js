const homeCtrl = {}
const Home = require("../models/homes")
//const { matchedData } = require("express-validator")
const { handleHttpError } = require("../utils/handleError")
//const { isObjectIdOrHexString } = require("mongoose")

/**
 * get curriculum vitae
 * @param {*} req 
 * @param {*} res 
 */
const getHomes = async (req, res) => {
    try{
      //const user = req.res
      console.log("body")

        const homes = await Home.find()
          res.json(homes)
          //res.send({ data, user})
          res.send({ data})
    }catch(e){
        //res.send({data})
        handleHttpError(res, 'Error_get_homes')
    }
    
}

/* create home
 * @param {*} req 
 * @param {*} res 
 */
const createHome = async (req, res) => {
    try {
        //const body = matchedData(req.body)
        const body = req.body
        console.log(body)
        const data = await Home.create(body)

         res.send({ data});
      } catch (e) {
        
        handleHttpError(res, "ERROR_CREATE_HOME");
      }
    
}

module.exports = {getHomes, createHome}
