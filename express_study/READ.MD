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
  1. app.use(cookieParser('设置加密字符串'));
  2. 设置cookie res.cookie("username", "王阳", { signed: true });
  3. 获取cookie req.signedCookies;
  ```
