const express = require("express");
const route = express.Router();
const userController = require("../controller/user.controller");

route.get(
    "/getUsers",
    userController.getUsers
);
route.post(
    "/insertUser",
    userController.insertUser
);
route.put(
    "/updateUser",
    userController.updateUSer
)

module.exports = route;