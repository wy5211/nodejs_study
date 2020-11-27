const Koa = require('koa');
const router = require('@koa/router')(); // 直接实例化
const app = new Koa();

const admin = require('./router/admin');
const news = require('./router/news');
const index = require('./router/Index');

router.use('/', index);

router.use('/admin', admin.routes());
router.use('/news', news.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
