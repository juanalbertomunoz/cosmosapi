require('dotenv').config();
const express = require('express');
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 3001;


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


//Middleware
app.use("/api/auth", authRoutes)
//app.use("/api/regShelly", regShellyRoutes)
app.use("/api/alerts", alertRoutes)
app.use("/api/homes", homeRoutes)

dbConnect()
app.listen(PORT, () => {
    console.log('Server express is connected in ' + PORT + ' PORT')
})
