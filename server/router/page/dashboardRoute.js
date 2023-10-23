const express = require("express");
const dashboardRoute = express.Router();

// CONTROLLER
const DashboardController = require("../../controller/page/DashboardController");

// MIDDLEWARE
const SideboardMiddleware = require("../../middleware/SideboardMiddleware");

// INIT
const dashboardController = new DashboardController();
const sideboardMiddleware = new SideboardMiddleware();

// ROUTES: FUNCTIONS
dashboardRoute.get(
  "/:userID",
  sideboardMiddleware.middleware,
  dashboardController.readAll
);

module.exports = dashboardRoute;
