const Koa = require('koa');
const router = require('@koa/router')(); // 直接实例化
const app = new Koa();
var views = require('koa-views');
// const render = views('views', { extension: 'ejs' });

const render = views(__dirname + '/views', {
  map: {
    html: 'ejs',
  },
});

app.use(render);

app.use(async (ctx, next) => {
  ctx.state.info = {
    title: 'state info',
  };
  await next();
});

router
  .get('/', (ctx, next) => {
    ctx.body = '首页';
  })
  .get('/news', async (ctx) => {
    // 获取get传值，ctx.query ?a=1&b=2
    console.log(ctx.query);
    await ctx.render('index', { title: 'ejs' });
  })
  .get('/details/:id', (ctx) => {
    // 动态路由
    console.log(ctx.params);
    ctx.body = '详情页';
  });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
