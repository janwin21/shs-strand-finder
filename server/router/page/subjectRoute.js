const express = require("express");
const subjectPRoute = express.Router();

// CONTROLLER
const SubjectController = require("../../controller/page/SubjectController");

const subjectController = new SubjectController();

// ROUTES: FUNCTIONS
subjectPRoute.get("/", subjectController.readAll);

module.exports = subjectPRoute;
