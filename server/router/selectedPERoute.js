const express = require("express");
const selectedPERoute = express.Router();

// CONTROLLER
const SelectedPEController = require("../controller/SelectedPEController");

const selectedPEController = new SelectedPEController();

// ROUTES
selectedPERoute.post("/", selectedPEController.create);

module.exports = selectedPERoute;
