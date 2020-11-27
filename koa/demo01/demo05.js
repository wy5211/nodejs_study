const Koa = require('koa');
const session = require('koa-session');
const app = new Koa();

app.keys = ['some secret hurr']; // 加密字符

const CONFIG = {
  key: 'koa.sess' /** (string) cookie key (default is koa.sess) */,
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true /** (boolean) automatically commit headers (default true) */,
  overwrite: true /** (boolean) can overwrite or not (default true) */,
  httpOnly: true /** (boolean) httpOnly or not (default true) 只能在服务端使用 */,
  signed: true /** (boolean) signed or not (default true) 是否加密 */,
  rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) 快过期了重制session */,
  renew: false /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/,
  secure: false /** (boolean) secure cookie 只能通过https发送请求 */,
  sameSite: null /** (string) session cookie sameSite options (default null, don't set it) */,
};

app.use(session(CONFIG, app));
// or if you prefer all default config, just use => app.use(session(app));

app.use((ctx) => {
  // ignore favicon
  if (ctx.path === '/favicon.ico') return;

  let n = ctx.session.views || 0;
  ctx.session.views = ++n;
  ctx.body = n + ' views';
});

app.listen(3000);
console.log('listening on port 3000');
