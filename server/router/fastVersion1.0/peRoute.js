const express = require("express");
const fastPERoute = express.Router();

// CONTROLLER
const PEController = require("../../controller/fastVersion1.0/PEController");

// MIDDLEWARE
const AuthMiddleware = require("../../middleware/AuthMiddleware");

// INIT
const peController = new PEController();
const authMiddleware = new AuthMiddleware();

// ROUTES: CRUD
fastPERoute.get(
  "/nav/assess",
  authMiddleware.authorize,
  peController.findByIdNav
);

module.exports = fastPERoute;
