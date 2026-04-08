const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { fixRequestBody } = require("http-proxy-middleware");

const router = express.Router();

const createServiceProxy = (target) =>
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: (path, req) => req.originalUrl,
    on: {
      proxyReq: fixRequestBody
    }
  });

router.use(
  "/users",
  createServiceProxy(process.env.USER_SERVICE_URL)
);

router.use(
  "/cameras",
  createServiceProxy(process.env.CAMERA_SERVICE_URL)
);

router.use(
  "/bookings",
  createServiceProxy(process.env.BOOKING_SERVICE_URL)
);

router.use(
  "/employees",
  createServiceProxy(process.env.EMPLOYEE_SERVICE_URL)
);

module.exports = router;