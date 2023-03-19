require('dotenv').config();
//const { ioMonitor } = require('socket.io-monitor');
const socketIO = require('socket.io');
const express = require('express');
const cors = require("cors")
const app = express();
const server = require('http').Server(app);
const io = socketIO(server);


const PORT = process.env.PORT || 3001;


io.on("connection", (socket) => {
  console.log("A client connected to the socket.io server");
});

app.use(cors())
app.use(express.json())

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
const socketRoutes = require('./routes/socket');


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


server.listen(PORT, () => {
    console.log('Server express is connected in ' + PORT + ' PORT')
});
