const {server} = require('../index');
const io = require('socket.io')(server, {
    cors: {
      origin: ['https://flourishing-valkyrie-7a4fe1.netlify.app/', '*'],
      methods: ['GET', 'POST']
    }
  });
  io.on("connection", (socket) => {
    console.log("A client connected to the socket.io server");
  });
  



module.exports = io;