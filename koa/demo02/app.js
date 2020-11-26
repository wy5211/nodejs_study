const Koa = require('koa');
const router = require('@koa/router')(); // 直接实例化
const app = new Koa();

app.use(async (ctx, next) => {
  console.log('1. 中间件执行了');
  next();
  console.log('5. 没有匹配到路由执行了');
});

app.use(async (ctx, next) => {
  console.log('2. 中间件执行了');
  next();
  console.log('4. 没有匹配到路由执行了');
});

router
  .get('/', (ctx, next) => {
    ctx.body = '首页';
  })
  .get('/news', (ctx) => {
    // 获取get传值，ctx.query ?a=1&b=2
    console.log('3. news ');
    ctx.body = 'news page';
  })
  .get('/details/:id', (ctx) => {
    // 动态路由
    console.log(ctx.params);
    ctx.body = '详情页';
  });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
