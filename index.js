require('dotenv').config();
//const { ioMonitor } = require('socket.io-monitor');
//const socketIO = require('socket.io');
const express = require('express');
const cors = require("cors")
const app = express();
const server = require('http').Server(app);
const PORT = process.env.PORT || 3001;
//const newAlert = require('./controllers/alert').newAlert
const io = require('./config/socket')





app.use(cors())
app.use(express.json())
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
const dbConnect = require("./config/mongo")
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


server.listen(PORT, () => {
    console.log('Server express is connected in ' + PORT + ' PORT')
});

module.exports = {server};