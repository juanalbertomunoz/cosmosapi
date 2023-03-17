function onAlertSecurity(socket) {
    console.log("alerta detectada");
  }
  
  function onConnection(socket) {
    console.log('Usuario conectado');
    socket.on('alertsecurity', onAlertSecurity);
  }

  function onWebhookReceived(req, res) {
    // Obtener los parámetros del webhook
    const parametro1 = req.body.parametro1;
    const parametro2 = req.body.parametro2;
    
    // Emitir los parámetros al socket
    io.emit('webhookReceived', { parametro1, parametro2 });
    
    // Responder al webhook con un mensaje de éxito
    res.send('Webhook recibido con éxito.');
  }
  
  module.exports = { onConnection, onWebhookReceived };