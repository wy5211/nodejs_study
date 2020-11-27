const router = require('@koa/router')(); // 直接实例化

router.get('/', async (ctx, next) => {
  ctx.body = 'home page';
});

router.get('about', async (ctx) => {
  ctx.body = 'about page';
});

module.exports = router.routes();
