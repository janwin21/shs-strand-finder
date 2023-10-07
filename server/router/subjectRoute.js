const express = require("express");
const subjectRoute = express.Router();

// CONTROLLER
const SubjectController = require("../controller/SubjectController");

const subjectController = new SubjectController();

// ROUTES
subjectRoute.post("/", subjectController.create);

module.exports = subjectRoute;
