const express = require("express");
const session = require("express-session");
const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/login", (req, res) => {
  res.send("执行登录");
});

app.get("/logout", (req, res) => {
  res.send("退出登录");
});

app.listen(3000);
