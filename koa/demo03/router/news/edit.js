const router = require('@koa/router')(); // 直接实例化

router.get('/', async (ctx, next) => {
  ctx.body = 'edit page';
});

module.exports = router;
