const express = require("express");
const fastViewableRoute = express.Router();

// CONTROLLER
const ViewableController = require("../../controller/fastVersion1.0/ViewableController");

// INIT
const viewableController = new ViewableController();

// ROUTES: FUNCTIONS
fastViewableRoute.get("/personal-engagement", viewableController.viewPE);
fastViewableRoute.get("/subject", viewableController.viewSubject);

module.exports = fastViewableRoute;
