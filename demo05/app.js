const http = require('http');
const routes = require('./module/routes');
const url = require('url');

http
  .createServer((req, res) => {
    routes.static(req, res, 'static');

    const pathname = url.parse(req.url).pathname;

    res.writeHead(200, {
      'Content-Type': `text/html;charset=utf-8`,
    });
    if (pathname === '/login') {
      res.end('执行登陆');
    } else if (pathname === '/register') {
      res.end('执行注册');
    } else if (pathname === '/admin') {
      res.end('执行后段逻辑');
    }
  })
  .listen(3000);

console.log('http://127.0.0.1:3000');
