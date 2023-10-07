const express = require("express");
const strandRoute = express.Router();

// CONTROLLER
const StrandController = require("../controller/StrandController");

const strandController = new StrandController();

// ROUTES
strandRoute.post("/", strandController.create);

module.exports = strandRoute;
