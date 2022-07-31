require("dotenv").config();
const { JWT_SECRET } = process.env
const { Users } = require("../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const auth = req.headers["authorization"];

    if (!auth) {
      throw new Error("UnAuthorized 0");
    }

    const token = auth.split("Bearer ")[1];

    if (!token || token === null) {
      throw new Error("Unauthorized 1");
    }

    const verifyToken = jwt.verify(token, JWT_SECRET);

    const user = await Users.findByPk(verifyToken.user?.id);

    if (!user) {
      throw new Error("Unauthorized 2");
    }

    // if (user.role !== "admin") {
    //   throw new Error("Unauthorized");
    // }
    
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({
      error: err.message,
    });
  }
};