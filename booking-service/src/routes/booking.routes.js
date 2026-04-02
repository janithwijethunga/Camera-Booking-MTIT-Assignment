const express = require("express");
const {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking
} = require("../controllers/booking.controller");

const router = express.Router();

/**
 * @swagger
 * /bookings:
 *   post:
 *     summary: Create a booking
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customerName
 *               - customerEmail
 *               - cameraId
 *               - bookingDate
 *               - returnDate
 *             properties:
 *               customerName:
 *                 type: string
 *                 example: Kasun Perera
 *               customerEmail:
 *                 type: string
 *                 example: kasun@gmail.com
 *               cameraId:
 *                 type: string
 *                 example: 67ea8f40f4a7e1c62f654321
 *               bookingDate:
 *                 type: string
 *                 example: 2026-03-30
 *               returnDate:
 *                 type: string
 *                 example: 2026-03-31
 *               status:
 *                 type: string
 *                 example: PENDING
 *     responses:
 *       201:
 *         description: Booking created successfully
 */
router.post("/", createBooking);

/**
 * @swagger
 * /bookings:
 *   get:
 *     summary: Get all bookings
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: List of bookings
 */
router.get("/", getAllBookings);

/**
 * @swagger
 * /bookings/{id}:
 *   get:
 *     summary: Get booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Booking data
 */
router.get("/:id", getBookingById);

/**
 * @swagger
 * /bookings/{id}/status:
 *   patch:
 *     summary: Update booking status
 *     tags: [Bookings]
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
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 example: APPROVED
 *     responses:
 *       200:
 *         description: Booking status updated
 */
router.patch("/:id/status", updateBookingStatus);

/**
 * @swagger
 * /bookings/{id}:
 *   delete:
 *     summary: Delete booking
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Booking deleted
 */
router.delete("/:id", deleteBooking);

module.exports = router;