const Camera = require("../models/camera.model");

async function createCamera(req, res) {
  try {
    const camera = await Camera.create(req.body);

    res.status(201).json({
      success: true,
      message: "Camera created successfully",
      data: camera
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create camera",
      error: error.message
    });
  }
}

async function getAllCameras(req, res) {
  try {
    const cameras = await Camera.find();

    res.status(200).json({
      success: true,
      count: cameras.length,
      data: cameras
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch cameras",
      error: error.message
    });
  }
}

async function getCameraById(req, res) {
  try {
    const camera = await Camera.findById(req.params.id);

    if (!camera) {
      return res.status(404).json({
        success: false,
        message: "Camera not found"
      });
    }

    res.status(200).json({
      success: true,
      data: camera
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch camera",
      error: error.message
    });
  }
}

async function updateCamera(req, res) {
  try {
    const camera = await Camera.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    if (!camera) {
      return res.status(404).json({
        success: false,
        message: "Camera not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Camera updated successfully",
      data: camera
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update camera",
      error: error.message
    });
  }
}

module.exports = {
  createCamera,
  getAllCameras,
  getCameraById,
  updateCamera
};