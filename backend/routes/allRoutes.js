const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/userModel");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userExists = await userModel.findOne({ email });
  if (userExists) {
    bcrypt.compare(password, userExists.password, (err, result) => {
      console.log(userExists);
      if (result == true) {
        const token = jwt.sign(
          { userid: userExists._id },
          process.env.SecretKey,
          { expiresIn: "7d" }
        );
        return res.json(token);
      } else {
        return res.json("User Error");
      }
    });
  } else {
    return res.json({ msg: "User Not Exists" });
  }
});

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await userModel.findOne({ email });
  if (userExists) {
    return res.json({ msg: "User Already Exists" });
  }
  try {
    bcrypt.hash(password, 4, async (err, hash) => {
      if (err) {
        return res.send(err);
      } else {
        const user = new userModel({ name, email, password: hash });
        await user.save();
        return res.send({ msg: "User Successfully Created" });
      }
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports = { router };
