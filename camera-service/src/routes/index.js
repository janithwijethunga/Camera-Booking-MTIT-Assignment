const express = require("express");
const cameraRoutes = require("./camera.routes");

const router = express.Router();

router.use("/cameras", cameraRoutes);

module.exports = router;