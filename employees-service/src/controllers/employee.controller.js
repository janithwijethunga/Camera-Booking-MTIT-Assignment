const Employee = require("../models/employee.model");

async function createEmployee(req, res) {
  try {
    const employee = await Employee.create(req.body);

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      data: employee
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create employee",
      error: error.message
    });
  }
}

async function getAllEmployees(req, res) {
  try {
    const employees = await Employee.find();

    res.status(200).json({
      success: true,
      count: employees.length,
      data: employees
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch employees",
      error: error.message
    });
  }
}

async function getEmployeeById(req, res) {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found"
      });
    }

    res.status(200).json({
      success: true,
      data: employee
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch employee",
      error: error.message
    });
  }
}

async function updateEmployee(req, res) {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee updated successfully",
      data: employee
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update employee",
      error: error.message
    });
  }
}

async function deleteEmployee(req, res) {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete employee",
      error: error.message
    });
  }
}

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
};