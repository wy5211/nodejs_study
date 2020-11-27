### demo01

> demo01.js

- hello koa
- 获取 get 传值

> demo02.js

- ejs

> demo03.js

- 原生 js 获取 post 传值
- 第三方中间件 koa-bodyparser 获取 post 传值

> demo04.js

- 静态资源中间件 koa-static

> koa cookie

- ctx.cookies.set('name', value[, options])
- ctx.cookies.get('name')
- koa cookie 不支持中文 cookie， 需要用 new Buffer 转一下

> koa-session

- ctx.session.name = 'wangyang'
- ctx.session.name

### demo02

> app.js

- 中间件， 洋葱模型
