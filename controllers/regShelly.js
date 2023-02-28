const { handleHttpError } = require("../utils/handleError")
const Reg = require("../models/reg")
const io = require("socket.io")(3002);

io.on('connection', (socket) => {
  console.log('Una alerta ha llegado');
});

const newRegShelly = async (req, res) => {
  try {
    const param1 = req.params.id;
    const param2 = req.params.id2;
    io.emit('alertsecurity', { param1, param2 });
    console.log(param1, param2);
    res.sendStatus(200);
  
  }catch (e)
   {
    console.log(e)
    handleHttpError(e, "ERROR_CREATE_SHELLY_REGISTER");
      
    
}
}

module.exports = {newRegShelly}