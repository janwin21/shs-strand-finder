const express = require("express");
const peRoute = express.Router();

// CONTROLLER
const PEController = require("../controller/PEController");

const peController = new PEController();

// ROUTES: CRUD
peRoute.post("/", peController.create);
peRoute.get("/", peController.findAll);
peRoute.get("/:peID", peController.findById);
peRoute.put("/:peID", peController.put);
peRoute.delete("/:peID", peController.delete);
peRoute.delete("/delete/all", peController.deleteAll);

module.exports = peRoute;
