const express = require("express");
const strandTypeRoute = express.Router();

// CONTROLLER
const StrandTypeController = require("../controller/StrandTypeController");

const strandTypeController = new StrandTypeController();

// ROUTES
strandTypeRoute.post("/", strandTypeController.create);

module.exports = strandTypeRoute;
