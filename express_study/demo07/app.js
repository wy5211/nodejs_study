const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const app = express();

app.use(
  session({
    secret: "keyboard cat",
    name: "express-session-set", // 修改session对应的cookie
    resave: false, // 强制保存session即使他没有变化
    saveUninitialized: true, // 强制将未初始化的session存储
    cookie: { secure: false },
    store: new MongoStore({
      url: "mongodb://127.0.0.1:27017/shop",
      touchAfter: 24 * 3600, // 24 小时内只更新一次session,除非改变session
    }),
  })
);

app.get("/", (req, res) => {
  const { username } = req.session;
  console.log(req.session);
  if (username) {
    res.send(`${username} -- 登录`);
  } else {
    res.send("没有登录");
  }
});

app.get("/login", (req, res) => {
  req.session.username = "wangyang";
  res.send("登录");
});

app.get("/logout", (req, res) => {
  res.send("退出登录");
});

app.listen(3000);
