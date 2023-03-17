const { handleHttpError } = require("../utils/handleError")
const express = require('express');
//const app = express();
//const http = require('http').Server(app);
const io = require('socket.io')(http);
/*
const io = require("socket.io")(3002, {
  cors: {
    origin: "https://flourishing-valkyrie-7a4fe1.netlify.app/"
  }
});
*/

io.on('connection', (socket) => {
    console.log('Una alerta ha llegado');

    socket.on('alertsecurity', (data) => {
      console.log('Datos recibidos:', data);
      })
  });


const socketEmit = async (param1, param2, param3) => {
  try {
    return io.emit('alertsecurity', { param1, param2, param3 });
    // Escuchar el evento 'alertsecurity' enviado desde el cliente
    
    
  } catch (error) {
    console.log("**** ERROR SOCKET EMIT ****", error);
  }
};

module.exports = socketEmit;



