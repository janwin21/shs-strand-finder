const express = require("express");
const subjectRoute = express.Router();

// CONTROLLER
const SubjectController = require("../controller/SubjectController");

const subjectController = new SubjectController();

// STORAGE
const StorageMiddleware = require("../middleware/StorageMiddleware");

const storageMiddleware = new StorageMiddleware();

// ROUTES: CRUD
subjectRoute.post(
  "/",
  storageMiddleware.storage("subject").single("image"),
  subjectController.create
);
subjectRoute.get("/", subjectController.findAll);
subjectRoute.get("/:subjectID", subjectController.findById);
subjectRoute.put("/:subjectID", subjectController.put);
subjectRoute.delete("/:subjectID", subjectController.delete);
subjectRoute.delete("/delete/all", subjectController.deleteAll);

module.exports = subjectRoute;
