const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
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

app.use("/", routes);

module.exports = app;