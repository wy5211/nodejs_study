const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const login = require("./routes/login");
const admin = require("./routes/admin");

// 配置第三方中间件  body-parser , 可以通过 req.body 来获取post值
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 设置模板引擎
app.set("view engine", "ejs");
// 路由模块化
app.use("/login", login);
app.use("/admin", admin);

app.get("/", (req, res) => {
  // get 通过 req.query 获取传值
  res.send("首页");
});

app.use((req, res, next) => {
  res.status(404).send("页面不存在");
});

app.listen(5000);
