require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3001;
const serversocket = require('http').Server(app);

app.use(cors())
app.use(express.json())

/**
 * SOCKET IO
 */
const io =require('socket.io')(serversocket);
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
const socketRoutes = require('./routes/socket')


//Middleware
app.use("/api/auth", authRoutes)
//app.use("/api/regShelly", regShellyRoutes)
app.use("/api/alerts", alertRoutes)
app.use("/api/homes", homeRoutes)
app.use("/api/socket", socketRoutes)



dbConnect()
app.listen(PORT, () => {
    console.log('Server express is connected in ' + PORT + ' PORT')
})


module.exports = {io, serversocket}
