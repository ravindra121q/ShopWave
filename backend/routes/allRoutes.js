const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
const { userModel } = require("../models/userModel");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      bcrypt.compare(password, userExists.password, (err, result) => {
        if (result) {
          res.json({ msg: "User Successfully Logged In" });
        } else {
          res.json({ msg: "Wrong Credationals" });
        }
      });
    } else {
      return res.json({ msg: "Wrong Credationals" });
    }
  } catch (error) {
    return res.send(error);
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await userModel.findOne({ email });
  try {
    if (userExists) {
      return res.json({ msg: "User Already Registered" });
    } else {
      bcrypt.hash(password, 4, async (err, hash) => {
        if (hash) {
          const newUser = new userModel({ name, email, password: hash });
          await newUser.save();
        } else {
          return res.json(err);
        }
      });
      return res.json({ msg: "User Created Successfully" });
    }
  } catch (error) {
    return res.send(error);
  }
});

router.get("/check", (req, res) => {
  res.send("Hi");
});

module.exports = { router };
