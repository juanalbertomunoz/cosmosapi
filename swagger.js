const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de vigilancia',
      version: '1.0.0',
      description: 'Una API para consumir desde diferentes front y se alimenta de las APIS  de sensores remotos conectados a internet',
    },
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJSDoc(options);

module.exports = (app) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
};
