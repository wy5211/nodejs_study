const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.render("login.ejs", {});
});

route.post("/doLogin", (req, res) => {
  // post 可以通过 body-parser 中间件方便获值，
  const loginData = req.body;
  console.log("loginData", loginData);
  res.send(`do login --- ${JSON.stringify(loginData)}`);
});

module.exports = route;
