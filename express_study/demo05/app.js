const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser('screctStr')); // cookie 加密需要传入加密的参数

app.get("/", (req, res) => {
  /*
    maxAge?: number;  过期时间/设置时长(毫秒)
    signed?: boolean; 是否加密(默认false)
    expires?: Date;   过期时间/设置data
    httpOnly?: boolean; 设置为true js 无法获取cookie,只能在服务端操作
    path?: string;    设置可以获取cookie 的path
    domain?: string;  设置二级域名, eg: 设置 .wy.com 时, a.wy.com & b.wy.com 都可以访问cookie
    secure?: boolean; 设置为 true 只有 https 可以设置/获取cookie
    encode?: (val: string) => string; 
    sameSite?: boolean | 'lax' | 'strict' | 'none';
   */
  // res.cookie("username", "wangyang", { maxAge: 1000 * 10 }); // 设置过期时长
  res.cookie("username", "王阳", { signed: true, domain: '.wangyang.com' }); // 是否加密 二级域名下有效
  res.send("home page");
});

app.get("/cart", (req, res) => {
  // 直接通过req.cookies 获取cookie
  // const { username } = req.cookies;

  // 设置了加密的通过 req.signedCookies 获取
  const { username } = req.signedCookies;

  console.log(req.signedCookies);

  res.send(`cart page ---  ${username}`);
});

app.listen(80, () => {
  console.log("127.0.0.1");
});
