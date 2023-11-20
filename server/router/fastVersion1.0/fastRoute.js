const express = require("express");
const fastRoute = express.Router();

// CONTROLLER
const FastController = require("../../controller/fastVersion1.0/FastController");
const FormController = require("../../controller/fastVersion1.0/FormController");

// MIDDLEWARE
const SideboardMiddleware = require("../../middleware/SideboardMiddleware");
const AuthMiddleware = require("../../middleware/AuthMiddleware");

// INIT
const fastController = new FastController();
const formController = new FormController();
const sideboardMiddleware = new SideboardMiddleware();
const authMiddleware = new AuthMiddleware();

// ROUTES: FUNCTIONS
fastRoute.get(
  "/auth",
  authMiddleware.authorize,
  sideboardMiddleware.middleware,
  fastController.fastAccess
);
fastRoute.get("/form", formController.findAll);

module.exports = fastRoute;
