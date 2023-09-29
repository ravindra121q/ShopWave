const jwt = require("jsonwebtoken");
require("dotenv").config();
const isAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.json({ msg: "Please Login First" });
  }
  const decoded = jwt.verify(token, process.env.SecretKey);
  if (decoded) {
    next();
    return;
  }
  return res.json({ msg: "Please Login Again" });
  next();
};

module.exports = { isAuth };
