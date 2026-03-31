const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const router = express.Router();

router.use(
  "/users",
  createProxyMiddleware({
    target: process.env.USER_SERVICE_URL,
    changeOrigin: true
  })
);

router.use(
  "/cameras",
  createProxyMiddleware({
    target: process.env.CAMERA_SERVICE_URL,
    changeOrigin: true
  })
);

router.use(
  "/bookings",
  createProxyMiddleware({
    target: process.env.BOOKING_SERVICE_URL,
    changeOrigin: true
  })
);

router.use(
  "/employees",
  createProxyMiddleware({
    target: process.env.EMPLOYEE_SERVICE_URL,
    changeOrigin: true
  })
);

module.exports = router;