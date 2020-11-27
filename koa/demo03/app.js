const Koa = require('koa');
const db = require('./module/db');
const router = require('@koa/router')(); // 直接实例化
const app = new Koa();

const dbClient = require('./module/db');

router
  .get('/', async (ctx, next) => {
    const list = await dbClient.find('user');
    // console.log(await dbClient.find('user'));

    ctx.body = list;
  })
  .get('/add', async (ctx) => {
    // ?name=222&age=222&status=222
    const { name, age, status } = ctx.query;
    const data = await dbClient.insert('user', {
      name,
      age,
      status,
    });
    ctx.body = data;
  })
  .get('/edit', async (ctx) => {
    await dbClient.update('user', { age: 111 }, { age: 888 });
    ctx.body = await dbClient.find('user');
  })
  .get('/delete', async (ctx) => {
    await dbClient.remove('user', { age: '222' });
    ctx.body = await dbClient.find('user');
  });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
