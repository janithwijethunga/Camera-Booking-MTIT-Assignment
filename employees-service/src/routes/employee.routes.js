const express = require("express");
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
} = require("../controllers/employee.controller");

const router = express.Router();

/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Create an employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - employeeCode
 *               - firstName
 *               - lastName
 *               - email
 *               - phone
 *               - department
 *               - position
 *               - salary
 *               - hireDate
 *             properties:
 *               employeeCode:
 *                 type: string
 *                 example: EMP-1001
 *               firstName:
 *                 type: string
 *                 example: Nimal
 *               lastName:
 *                 type: string
 *                 example: Perera
 *               email:
 *                 type: string
 *                 example: nimal.perera@camerabooking.com
 *               phone:
 *                 type: string
 *                 example: +94771234567
 *               department:
 *                 type: string
 *                 example: Operations
 *               position:
 *                 type: string
 *                 example: Branch Manager
 *               address:
 *                 type: string
 *                 example: No 12, Flower Road, Colombo 07
 *               salary:
 *                 type: number
 *                 example: 250000
 *               employmentType:
 *                 type: string
 *                 example: FULL_TIME
 *               hireDate:
 *                 type: string
 *                 format: date
 *                 example: 2024-02-01
 *               status:
 *                 type: string
 *                 example: ACTIVE
 *     responses:
 *       201:
 *         description: Employee created successfully
 */
router.post("/", createEmployee);

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Get all employees
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: List of employees
 */
router.get("/", getAllEmployees);

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: Get employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Employee data
 */
router.get("/:id", getEmployeeById);

/**
 * @swagger
 * /employees/{id}:
 *   patch:
 *     summary: Update employee
 *     tags: [Employees]
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
 *               firstName:
 *                 type: string
 *                 example: Kasun
 *               department:
 *                 type: string
 *                 example: Finance
 *               position:
 *                 type: string
 *                 example: Senior Accountant
 *               salary:
 *                 type: number
 *                 example: 200000
 *               status:
 *                 type: string
 *                 example: ON_LEAVE
 *     responses:
 *       200:
 *         description: Employee updated
 */
router.patch("/:id", updateEmployee);

/**
 * @swagger
 * /employees/{id}:
 *   delete:
 *     summary: Delete employee
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Employee deleted
 */
router.delete("/:id", deleteEmployee);

module.exports = router;