const express = require("express");
const userRoute = express.Router();

// CONTROLLER
const AnswerController = require("../controller/AnswerController");

const userController = new AnswerController();

// ROUTES
userRoute.post("/", userController.create);

module.exports = userRoute;
