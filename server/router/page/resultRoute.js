const express = require("express");
const resultRoute = express.Router();

// CONTROLLER
const ResultController = require("../../controller/page/ResultController");

const resultController = new ResultController();

// ROUTES: FUNCTIONS
resultRoute.get("/:userID", resultController.resultByUserId);

module.exports = resultRoute;
