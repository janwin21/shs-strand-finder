const express = require("express");
const fastAdminRoute = express.Router();

// CONTROLLER
const AdminController = require("../../../controller/fastVersion1.0/page/AdminController");

// INIT
const adminController = new AdminController();

// ROUTES: FUNCTIONS
fastAdminRoute.get("/auth", adminController.auth);

module.exports = fastAdminRoute;
