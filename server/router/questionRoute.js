const express = require("express");
const questionRoute = express.Router();

// CONTROLLER
const QuestionController = require("../controller/QuestionController");

const questionController = new QuestionController();

// ROUTES
questionRoute.post("/", questionController.create);

module.exports = questionRoute;
