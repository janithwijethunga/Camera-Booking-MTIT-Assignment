const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Booking Service API",
      version: "1.0.0",
      description: "Booking microservice API documentation"
    },
    servers: [
      {
        url: "http://localhost:5003"
      }
    ]
  },
  apis: ["./src/routes/*.js"]
};

module.exports = swaggerJSDoc(options);