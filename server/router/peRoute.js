const express = require("express");
const peRoute = express.Router();

// CONTROLLER
const PEController = require("../controller/PEController");

const peController = new PEController();

// ROUTES
peRoute.post("/", peController.create);

module.exports = peRoute;
