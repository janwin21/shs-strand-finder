const express = require("express");
const fastDashboardRoute = express.Router();

// CONTROLLER
const DashboardController = require("../../../controller/fastVersion1.0/page/DashboardController");

// INIT
const dashboardController = new DashboardController();

// ROUTES: FUNCTIONS
fastDashboardRoute.get("/", dashboardController.readAll);

module.exports = fastDashboardRoute;
