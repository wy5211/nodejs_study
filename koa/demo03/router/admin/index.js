const router = require('@koa/router')(); // 直接实例化
const user = require('./user');

router.get('/', async (ctx, next) => {
  ctx.body = 'admin page';
});

router.use('/user', user.routes());

module.exports = router;
