const express = require("express");
const fastResultRoute = express.Router();

// CONTROLLER
const ResultController = require("../../../controller/fastVersion1.0/page/ResultController");

// MIDDLEWARE
const AuthMiddleware = require("../../../middleware/AuthMiddleware");

// INIT
const resultController = new ResultController();
const authMiddleware = new AuthMiddleware();

// ROUTES: FUNCTIONS
fastResultRoute.get(
  "/",
  authMiddleware.authorize,
  resultController.resultByUserId
);
fastResultRoute.get("/:userID", resultController.findUserResult);

module.exports = fastResultRoute;
