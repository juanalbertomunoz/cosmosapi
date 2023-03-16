const { handleHttpError } = require("../utils/handleError")
const io = require("socket.io")(3002, {
  cors: {
    origin: "*"
  }
});

io.on('connection', (socket) => {
    console.log('Una alerta ha llegado');
  });

const socketEmit = async (param1, param2, param3) => {
  try {
    return io.emit('alertsecurity', { param1, param2, param3 });
  } catch (error) {
    console.log("**** ERROR SOCKET EMIT ****", error);
  }
};

module.exports = socketEmit;



