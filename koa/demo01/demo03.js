const Koa = require('koa');
const router = require('@koa/router')(); // 直接实例化
const app = new Koa();
const views = require('koa-views');
// const { getPostValue } = require('./module/common');
const bodyParser = require('koa-bodyparser');

// const render = views('views', { extension: 'ejs' });

const render = views(__dirname + '/views', {
  map: {
    html: 'ejs',
  },
});

app.use(render);

app.use(bodyParser());

app.use(async (ctx, next) => {
  ctx.state.info = {
    title: 'state info',
  };
  await next();
});

router.get('/', async (ctx, next) => {
  await ctx.render('index', { title: 'post 传值' });
});

router.post('/doPost', async (ctx) => {
  // 原生nodejs获取post传值
  // const data = await getPostValue(ctx);
  // console.log(data, '123');
  // ctx.body = data;

  // koa-bodyparser 获取post传值
  ctx.body = ctx.request.body;
  console.log(ctx.request.body);
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
