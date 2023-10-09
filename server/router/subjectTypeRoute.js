const express = require("express");
const subjectTypeRoute = express.Router();

// CONTROLLER
const SubjectTypeController = require("../controller/SubjectTypeController");

const subjectTypeController = new SubjectTypeController();

// ROUTES: CRUD
subjectTypeRoute.post("/", subjectTypeController.create);
subjectTypeRoute.get("/", subjectTypeController.findAll);
subjectTypeRoute.get("/:subjectTypeID", subjectTypeController.findById);
subjectTypeRoute.put("/:subjectTypeID", subjectTypeController.put);
subjectTypeRoute.delete("/:subjectTypeID", subjectTypeController.delete);
subjectTypeRoute.delete("/delete/all", subjectTypeController.deleteAll);

module.exports = subjectTypeRoute;
