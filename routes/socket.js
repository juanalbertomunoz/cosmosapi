const express = require('express');
const router = express.Router();

// Incluya los controladores de ruta
const socketCtrl = require('../controllers/socket');

router.get('/', (req, res) => {
  res.send('¡Alerta detectada!');
});

// Inicialice el controlador de sockets aquí
const { io } = require('../index');
io.on('connection', socketCtrl);

module.exports = router;
