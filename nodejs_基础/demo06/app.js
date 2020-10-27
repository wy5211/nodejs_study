const http = require('http');
const routes = require('./module/routes');
const url = require('url');

http
  .createServer((req, res) => {
    routes.static(req, res, 'static');

    const pathname = url.parse(req.url).pathname.replace('/', '');
    console.log(pathname);
    try {
      routes[pathname](res);
    } catch (err) {
      routes['error'](res);
    }
  })
  .listen(3000);

console.log('http://127.0.0.1:3000');
