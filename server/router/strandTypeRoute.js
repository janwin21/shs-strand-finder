const express = require("express");
const strandTypeRoute = express.Router();

// CONTROLLER
const StrandTypeController = require("../controller/StrandTypeController");

const strandTypeController = new StrandTypeController();

// ROUTES: CRUD
strandTypeRoute.post("/", strandTypeController.create);
strandTypeRoute.get("/", strandTypeController.findAll);
strandTypeRoute.get("/:strandTypeID", strandTypeController.findById);
strandTypeRoute.put("/:strandTypeID", strandTypeController.put);
strandTypeRoute.delete("/:strandTypeID", strandTypeController.delete);
strandTypeRoute.delete("/delete/all", strandTypeController.deleteAll);

module.exports = strandTypeRoute;
