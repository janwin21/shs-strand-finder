const express = require("express");
const subjectRoute = express.Router();

// CONTROLLER
const SubjectController = require("../controller/SubjectController");

const subjectController = new SubjectController();

// ROUTES: CRUD
subjectRoute.post("/", subjectController.create);
subjectRoute.get("/", subjectController.findAll);
subjectRoute.get("/:subjectID", subjectController.findById);
subjectRoute.put("/:subjectID", subjectController.put);
subjectRoute.delete("/:subjectID", subjectController.delete);
subjectRoute.delete("/delete/all", subjectController.deleteAll);

module.exports = subjectRoute;
