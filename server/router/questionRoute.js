const express = require("express");
const questionRoute = express.Router();

// CONTROLLER
const QuestionController = require("../controller/QuestionController");

const questionController = new QuestionController();

// ROUTES: CRUD
questionRoute.post("/", questionController.create);
questionRoute.get("/", questionController.findAll);
questionRoute.get("/:questionID", questionController.findById);
questionRoute.put("/:questionID", questionController.put);
questionRoute.delete("/:questionID", questionController.delete);
questionRoute.delete("/delete/all", questionController.deleteAll);

module.exports = questionRoute;
