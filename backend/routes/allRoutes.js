const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/userModel");
const { isAuth } = require("../middleware/authMiddleware");
const { cartModel } = require("../models/cartModel");
const { adminCartModel } = require("../models/adminCart");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userExists = await userModel.findOne({ email });
  if (userExists) {
    bcrypt.compare(password, userExists.password, (err, result) => {
      console.log(userExists);
      if (result == true) {
        const token = jwt.sign(
          { userId: userExists._id },
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

router.post("/product/cart", isAuth, async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  const decoded = jwt.verify(token, process.env.SecretKey);
  const { title, category, price, description, image, rating } = req.body;

  console.log(decoded);
  const itemExists = await cartModel.findOne({ title });
  if (itemExists) {
    return res.json({ msg: "Item Already In The Cart" });
  }
  const item = new cartModel({
    title,
    category,
    price,
    description,
    image,
    rating,
    userId: decoded.userId,
  });
  await item.save();
  return res.json({ msg: "Item Added To The Cart" });
});

router.get("/product/cart/items", isAuth, async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  const decoded = jwt.verify(token, process.env.SecretKey);
  if (decoded) {
    const userCart = await cartModel.find({ userId: decoded.userId });

    if (userCart) {
      return res.json(userCart);
    } else {
      console.log(userCart);
      return res.json("Wrong Credationals");
    }
  } else {
    return res.status(500).json({ msg: "Server Error" });
  }
});

router.delete("/product/cart/items/:id", async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization?.split(" ")[1];

  const decoded = jwt.verify(token, process.env.SecretKey);
  if (decoded) {
    const cartItem = await cartModel.findOne({ _id: id });
    if (cartItem) {
      await cartModel.findByIdAndDelete({ _id: id });
      return res.json({ msg: "Item Successfully Deleted" });
    } else {
      return res.json({ msg: "Item Not Found" });
    }
  }
});

router.get("/product/cart/adminItems", async (req, res) => {
  try {
    const items = await adminCartModel.find();
    return res.send(items);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = { router };
