const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const { buildGatewaySwaggerSpec } = require("./docs/swagger-aggregator");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Gateway is running",
    routes: {
      users: "/users",
      cameras: "/cameras",
      bookings: "/bookings",
      employees: "/employees"
    }
  });
});

app.get("/api-docs-json", async (req, res) => {
  const gatewayUrl = `${req.protocol}://${req.get("host")}`;
  const swaggerSpec = await buildGatewaySwaggerSpec(gatewayUrl);
  res.status(200).json(swaggerSpec);
});

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(null, {
    explorer: true,
    swaggerOptions: {
      url: "/api-docs-json"
    }
  })
);

app.use("/", routes);

module.exports = app;