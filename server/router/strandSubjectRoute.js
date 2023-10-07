const express = require("express");
const strandSubjectRoute = express.Router();

// CONTROLLER
const StrandSubjectController = require("../controller/StrandSubjectController");

const strandSubjectController = new StrandSubjectController();

// ROUTES
// strandSubjectRoute.post("/", strandSubjectController.create);
strandSubjectRoute.post("/", strandSubjectController.create);

module.exports = strandSubjectRoute;
