const express = require("express");
const {
  createCamera,
  getAllCameras,
  getCameraById,
  updateCamera,
  deleteCamera
} = require("../controllers/camera.controller");

const router = express.Router();

/**
 * @swagger
 * /cameras:
 *   post:
 *     summary: Create a camera
 *     tags: [Cameras]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cameraName
 *               - brand
 *               - model
 *               - category
 *               - pricePerDay
 *             properties:
 *               cameraName:
 *                 type: string
 *                 example: Canon EOS R6
 *               brand:
 *                 type: string
 *                 example: Canon
 *               model:
 *                 type: string
 *                 example: R6
 *               category:
 *                 type: string
 *                 example: Mirrorless
 *               pricePerDay:
 *                 type: number
 *                 example: 5000
 *               status:
 *                 type: string
 *                 example: AVAILABLE
 *     responses:
 *       201:
 *         description: Camera created successfully
 */
router.post("/", createCamera);

/**
 * @swagger
 * /cameras:
 *   get:
 *     summary: Get all cameras
 *     tags: [Cameras]
 *     responses:
 *       200:
 *         description: List of cameras
 */
router.get("/", getAllCameras);

/**
 * @swagger
 * /cameras/{id}:
 *   get:
 *     summary: Get camera by ID
 *     tags: [Cameras]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Camera data
 */
router.get("/:id", getCameraById);

/**
 * @swagger
 * /cameras/{id}:
 *   patch:
 *     summary: Update camera by ID
 *     tags: [Cameras]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cameraName:
 *                 type: string
 *                 example: Sony A7 IV
 *               brand:
 *                 type: string
 *                 example: Sony
 *               model:
 *                 type: string
 *                 example: A7 IV
 *               category:
 *                 type: string
 *                 example: DSLR
 *               pricePerDay:
 *                 type: number
 *                 example: 6500
 *               status:
 *                 type: string
 *                 example: BOOKED
 *     responses:
 *       200:
 *         description: Camera updated
 */
router.patch("/:id", updateCamera);

/**
 * @swagger
 * /cameras/{id}:
 *   delete:
 *     summary: Delete camera by ID
 *     tags: [Cameras]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Camera deleted
 */
router.delete("/:id", deleteCamera);

module.exports = router;