const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.send("admin 列表");
});

route.get("/add", (req, res) => {
  res.send("admin 列表 增加");
});

route.get("/edit", (req, res) => {
  res.send("admin 列表 编辑");
});

route.post("/do_add", (req, res) => {
  res.send("admin 列表 增加");
});

route.post("/do_edit", (req, res) => {
  res.send("admin 列表 编辑");
});

module.exports = route;
