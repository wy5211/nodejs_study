const Koa = require('koa');
const router = require('@koa/router')(); // 直接实例化
const app = new Koa();
const views = require('koa-views');
const serve = require('koa-static');

const render = views(__dirname + '/views', {
  map: {
    html: 'ejs',
  },
});

// 模版引擎
app.use(render);

// 配置静态资源目录, 可以配置多个
app.use(serve(__dirname + '/static'));
// app.use(serve(__dirname + '/public'));

app.use(async (ctx, next) => {
  console.log('111', __dirname);
  // 全局state
  ctx.state.info = {
    title: 'state info',
  };
  await next();
});

router.get('/', async (ctx, next) => {
  ctx.cookies.set('username', 'wangyang', {
    maxAge: 1000 * 10,
  });
  await ctx.render('index', { title: 'post 传值' });
});

router.get('/cart', async (ctx) => {
  ctx.body = ctx.cookies.get('username');
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
