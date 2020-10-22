const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');


http.createServer((req, res) => {

  let pathname = url.parse(req.url).pathname;

  console.log(path.extname(pathname));


  if (pathname !== '/favicon.ico') {
    fs.readFile(`static/${pathname}`, (err, data) => {
      if (err) {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.end('404 页面不存在')
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
      res.end(data)
    })
  }
}).listen(3000)

console.log('http://127.0.0.1:3000')
