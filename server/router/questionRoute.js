const express = require("express");
const questionRoute = express.Router();

// CONTROLLER
const QuestionController = require("../controller/QuestionController");

const questionController = new QuestionController();

// STORAGE
const StorageMiddleware = require("../middleware/StorageMiddleware");

const storageMiddleware = new StorageMiddleware();

// ROUTES: CRUD
questionRoute.post(
  "/",
  storageMiddleware.storage("question").single("questionImage"),
  questionController.create
);
questionRoute.get("/", questionController.findAll);
questionRoute.get("/:questionID", questionController.findById);
questionRoute.put("/:questionID", questionController.put);
questionRoute.delete("/:questionID", questionController.delete);
questionRoute.delete("/delete/all", questionController.deleteAll);

module.exports = questionRoute;
