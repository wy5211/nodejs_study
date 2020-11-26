const Koa = require('koa');
const router = require('@koa/router')(); // 直接实例化
const app = new Koa();
// const router = new Router();

router
  .get('/', (ctx, next) => {
    ctx.body = '首页';
  })
  .get('/news', (ctx) => {
    // 获取get传值，ctx.query ?a=1&b=2
    console.log(ctx.query);
    ctx.body = 'news page';
  })
  .get('/details/:id', (ctx) => {
    // 动态路由
    console.log(ctx.params);
    ctx.body = '详情页';
  });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
