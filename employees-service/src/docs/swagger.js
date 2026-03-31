const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Employees Service API",
      version: "1.0.0",
      description: "Employees microservice API documentation"
    },
    servers: [
      {
        url: "http://localhost:5004"
      }
    ]
  },
  apis: ["./src/routes/*.js"]
};

module.exports = swaggerJSDoc(options);