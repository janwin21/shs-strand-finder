const express = require("express");
const subjectTypeRoute = express.Router();

// CONTROLLER
const SubjectTypeController = require("../controller/SubjectTypeController");

const subjectTypeController = new SubjectTypeController();

// ROUTES
subjectTypeRoute.post("/", subjectTypeController.create);

module.exports = subjectTypeRoute;
