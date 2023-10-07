const express = require("express");
const selectedStrandRoute = express.Router();

// CONTROLLER
const SelectedStrandController = require("../controller/SelectedStrandController");

const selectedStrandController = new SelectedStrandController();

// ROUTES
selectedStrandRoute.post("/", selectedStrandController.create);

module.exports = selectedStrandRoute;
