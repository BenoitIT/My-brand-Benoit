const express = require("express");
const UserRouter = express.Router();
const { createUser, login } = require("../controllers/authController/users");
UserRouter.route("/register").post(createUser);
UserRouter.route("/login").post(login);
module.exports = UserRouter;
