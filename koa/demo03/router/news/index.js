const router = require('@koa/router')(); // 直接实例化
const edit = require('./edit');

router.get('/', async (ctx, next) => {
  ctx.body = '新闻列表';
});

router.use('/edit', edit.routes());

module.exports = router;
