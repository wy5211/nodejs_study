const express = require("express");

const route = express.Router();

const user = require("./admin/user");
route.use("/user", user);

route.get("/", (req, res) => {
  res.send("admin 管理");
});

module.exports = route;
