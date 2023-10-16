const express = require("express");
const dashboardRoute = express.Router();

// CONTROLLER
const DashboardController = require("../../controller/page/DashboardController");

const dashboardController = new DashboardController();

// ROUTES: FUNCTIONS
dashboardRoute.get("/", dashboardController.readAll);

module.exports = dashboardRoute;
