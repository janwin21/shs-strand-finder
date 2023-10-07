const express = require("express");
const answerKeyRoute = express.Router();

// CONTROLLER
const AnswerKeyController = require("../controller/AnswerKeyController");

const answerKeyController = new AnswerKeyController();

// ROUTES
answerKeyRoute.post("/", answerKeyController.create);

module.exports = answerKeyRoute;
