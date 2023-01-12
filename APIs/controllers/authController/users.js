const User = require("../../models/users");
const Bcrypt = require("bcrypt");
const loadash = require("lodash");
const JWT = require("jsonwebtoken");
require("dotenv").config();
const { asyncWrapper } = require("../../middlewares/asyncWrapper");

const createUser = asyncWrapper(async (req, res) => {
  const salt = await Bcrypt.genSalt(10);
  const hashedPassword = await Bcrypt.hash(req.body.password, salt);
  const { userName, email } = req.body;
  if (!userName) {
    res.json({ message: `username field is empty` });
  }
  if (!email) {
    res.json({ message: `email field is empty` });
  } else {
    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
    });
    res.json(loadash.pick(user, ["userName", "email"]));
  }
});

const login = asyncWrapper(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    res.json({ message: "enter email and password" });
  }
  let user = await User.findOne({ email }).exec();
  if (user) {
    const checkedpassword = await Bcrypt.compare(password, user.password);
    if (checkedpassword) {
      const accessToken = JWT.sign(
        { _id: user._id, email: user.email },
        process.env.APP_SECRET,
        { expiresIn: "1d" }
      );
      const refreshToken = JWT.sign(
        { _id: user._id, email: user.email },
        process.env.APP_SECRET,
        { expiresIn: "10d" }
      );
      user.refreshToken=refreshToken;
      await user.save()
      res.header("x-auth-token", accessToken);
      res.json({ message: "welcome" });
    }
  }
  res.json({ message: "incorrect username and password" });
});
module.exports = { createUser, login };
