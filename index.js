const express = require('express');
const cors = require("cors")
require('dotenv').config();
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
const regShellyRoutes = require("./routes/regShelly")

//Middleware
app.use("/api/auth", authRoutes)
app.use("/api/regShelly", regShellyRoutes)

app.listen(PORT, () => {
    console.log('Server express is connected in ' + PORT + ' PORT')
})
dbConnect()