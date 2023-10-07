const express = require("express");
const userRoute = express.Router();

// CONTROLLER
const UserController = require("../controller/UserController");

const userController = new UserController();

// ROUTES
userRoute.post("/", userController.create);

module.exports = userRoute;
