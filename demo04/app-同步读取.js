const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const common = require('./module/common');

http
  .createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    pathname = pathname === '/' ? 'index.html' : pathname;
    console.log(path.extname(pathname));

    let extname = path.extname(pathname);

    if (pathname !== '/favicon.ico') {
      fs.readFile(`static/${pathname}`, (err, data) => {
        let mime = common.asyncMIMEType(extname);
        if (err) {
          res.writeHead(404, {
            'Content-Type': `${mime};charset=utf-8`,
          });
          res.write('404 页面不存在');
          res.end();
          return;
        }
        res.writeHead(200, {
          'Content-Type': `${mime};charset=utf-8`,
        });
        res.write(data);
        res.end();
      });
    }
  })
  .listen(3000);

console.log('http://127.0.0.1:3000');
