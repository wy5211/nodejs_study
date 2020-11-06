### demo01

- express 路由/动态路由参数获取

### demo02

- express 中使用 ejs 模板引擎
- express 静态资源统一配置

### demo03

- express 中间件：匹配路由之前或者匹配路由完成做的一系列的操作。中间件如果想往下匹配的话，需要写 next()

#### 中间件的分类

- 应用级中间件 - 可用于权限判断
- 路由级中间件 - 用的比较少，可以向下匹配
- 错误中间件 - 用于错误处理
- 内置中间件 - eg 统一资源配置
- 第三方中间件 - eg body-parser，用来获取 post 传值（demo04）

### demo04

- body-parser 第三方中间件,用来方便获取 post 传值,可通过 req.body 来获取 post 传值

### demo05

- cookie-parser 第三方中间件,方便在服务端设置和获取 cookie

> cookie 加密

```js

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

  1. app.use(cookieParser('设置加密字符串'));
  2. 设置cookie res.cookie("key", "value", { signed: true });
  3. 获取cookie req.signedCookies;
```

### demo06

- express-session
  > cookie 保存在客户端浏览器中, session 保存在服务器上

### demo07

- connect-ssession 将 session 保存在数据库里面, 实现数据共享

### demo08

- 路由模块化
- 文件上传/多文件上传， 文件上传封装
- silly-datetime ，第三方模块处理时间

### demo09

- express-generator
- test
