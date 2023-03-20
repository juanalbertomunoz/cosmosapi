require('dotenv').config();
//const { ioMonitor } = require('socket.io-monitor');
//const socketIO = require('socket.io');
const express = require('express');
const cors = require("cors")
const dbConnect = require("./config/mongo")
const { Server } = require("socket.io");
const app = express();
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 3001;
app.set("port", PORT);
//const newAlert = require('./controllers/alert').newAlert
const http = require("http");
const server = http.createServer(app);
/*
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET"],
  },
});
*/
const io = require('./config/socket')



/*
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
*/
/**
 * SWAGGER
 */
require('./swagger')(app);

/**
 * ROUTES
 */
const authRoutes = require("./routes/auth")
//const regShellyRoutes = require("./routes/alert")
const homeRoutes = require("./routes/home")
const alertRoutes = require("./routes/alert")



//Middleware
app.use("/api/auth", authRoutes)
//app.use("/api/regShelly", regShellyRoutes)
app.use("/api/alerts", alertRoutes)
app.use("/api/homes", homeRoutes)
//app.use('/api/alertsecurity', socketRoutes(io));

dbConnect()
// Configurar socket.io-monitor
//ioMonitor(io, { port: 8082, path: '/socket.io-monitor' });
// Exponer la interfaz de usuario web en la ruta /socket.io/monitor
io.on("connection", (socket) => {
  console.log("A client connected to the socket.io server");
});
/*
io.on("connection", (socket) => {
  console.log("New Connection Socket");
  socket.emit("alertsequrete");
});
*/
app.get("/", (req, res) => {
  res.send("<span>Cosmos Server</span>");
});

server.listen(app.get("port"), () => {
  console.log(`Server listen in the port: ${app.get("port")}`);
});
/*
server.listen(PORT, () => {
    console.log('Server express is connected in ' + PORT + ' PORT')
});
*/
module.exports = server;