const express = require("express");
const strandRoute = express.Router();

// CONTROLLER
const StrandController = require("../controller/StrandController");

const strandController = new StrandController();

// STORAGE
const StorageMiddleware = require("../middleware/StorageMiddleware");

const storageMiddleware = new StorageMiddleware();

// ROUTES: CRUD
strandRoute.post(
  "/",
  storageMiddleware.storage("strand").single("image"),
  strandController.create
);
strandRoute.get("/", strandController.findAll);
strandRoute.get("/:strandID", strandController.findById);
strandRoute.put("/:strandID", strandController.put);
strandRoute.delete("/:strandID", strandController.delete);
strandRoute.delete("/delete/all", strandController.deleteAll);

module.exports = strandRoute;
