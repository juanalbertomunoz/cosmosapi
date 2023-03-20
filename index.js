require("dotenv").config();
//const { ioMonitor } = require('socket.io-monitor');
//const socketIO = require('socket.io');
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./config/mongo");
//const newAlert = require('./controllers/alert').newAlert

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());

/**
 * SWAGGER
 */
require("./swagger")(app);

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "https://flourishing-valkyrie-7a4fe1.netlify.app/",
    methods: ["GET"],
  },
});

const authRoutes = require("./routes/auth");
//const regShellyRoutes = require("./routes/alert")
const homeRoutes = require("./routes/home");
// const alertRoutes = require("./routes/alert")

//Middleware
app.use("/api/auth", authRoutes);
//app.use("/api/regShelly", regShellyRoutes)
// app.use("/api/alerts", alertRoutes)
app.use("/api/homes", homeRoutes);
//app.use('/api/alertsecurity', socketRoutes(io));

io.on("connection", (socket) => {
  console.log("New Connection Socket");
  socket.emit("alertsequrete");
});

app.set("port", 3001);

app.get("/", (req, res) => {
  res.send("<span>Cosmos Server</span>");
});

dbConnect();
// Configurar socket.io-monitor
//ioMonitor(io, { port: 8082, path: '/socket.io-monitor' });
// Exponer la interfaz de usuario web en la ruta /socket.io/monitor

server.listen(app.get("port"), () => {
  console.log(`Server listen in the port: ${app.get("port")}`);
});