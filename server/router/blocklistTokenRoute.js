const express = require("express");
const blocklistTokenRoute = express.Router();

// CONTROLLER
const BlocklistTokenController = require("../controller/BlocklistTokenController");

const blocklistTokenController = new BlocklistTokenController();

// ROUTES
blocklistTokenRoute.post("/", blocklistTokenController.create);

module.exports = blocklistTokenRoute;
