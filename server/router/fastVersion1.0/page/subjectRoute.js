const express = require("express");
const fastSubjectRoute = express.Router();

// CONTROLLER
const SubjectController = require("../../../controller/fastVersion1.0/page/SubjectController");

// MIDDLEWARE
const AuthMiddleware = require("../../../middleware/AuthMiddleware");

// INIT
const subjectController = new SubjectController();
const authMiddleware = new AuthMiddleware();

// ROUTES: FUNCTIONS
fastSubjectRoute.get("/", subjectController.readAll);
fastSubjectRoute.get(
  "/:subjectID",
  authMiddleware.authorize,
  subjectController.findByIdAssessment
);

module.exports = fastSubjectRoute;
