const express = require("express");
const answerKeyRoute = express.Router();

// CONTROLLER
const AnswerKeyController = require("../controller/AnswerKeyController");

const answerKeyController = new AnswerKeyController();

// ROUTES: CRUD
answerKeyRoute.post("/", answerKeyController.create);
answerKeyRoute.get("/", answerKeyController.findAll);
answerKeyRoute.get("/:answerKeyID", answerKeyController.findById);
answerKeyRoute.put("/:answerKeyID", answerKeyController.put);
answerKeyRoute.delete("/:answerKeyID", answerKeyController.delete);
answerKeyRoute.delete("/delete/all", answerKeyController.deleteAll);

module.exports = answerKeyRoute;
