const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Camera Service API",
      version: "1.0.0",
      description: "Camera microservice API documentation"
    },
    servers: [
      {
        url: "http://localhost:5002"
      }
    ]
  },
  apis: ["./src/routes/*.js"]
};

module.exports = swaggerJSDoc(options);