const express = require("express");
const subjectPRoute = express.Router();

// CONTROLLER
const SubjectController = require("../../controller/page/SubjectController");

// MIDDLEWARE
const SideboardMiddleware = require("../../middleware/SideboardMiddleware");

const subjectController = new SubjectController();
const sideboardMiddleware = new SideboardMiddleware();

// ROUTES: FUNCTIONS
subjectPRoute.get(
  "/:userID",
  sideboardMiddleware.middleware,
  subjectController.readAll
);

module.exports = subjectPRoute;
