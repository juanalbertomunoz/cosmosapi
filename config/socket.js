const socketIO = require("socket.io");
const http = require("http");
const app = require("../index");

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.on("connection", (socket) => {
  console.log("A client connected to the socket.io server");
});

module.exports = io;
