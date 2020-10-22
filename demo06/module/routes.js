const fs = require('fs');
const url = require('url');
const path = require('path');
const ejs = require('ejs');

let asyncMIMEType = (pathname) => {
  let data = fs.readFileSync('./data/mime.json');
  let mimeObjg = JSON.parse(data.toString());
  return mimeObjg[pathname];
};

const app = {
  static: (req, res, staticPath) => {
    let pathname = url.parse(req.url).pathname;
    pathname = pathname === '/' ? 'index.html' : pathname;
    // 获取后缀名
    let extname = path.extname(pathname);

    if (pathname !== '/favicon.ico') {
      try {
        let data = fs.readFileSync(`${staticPath}/${pathname}`);
        if (data) {
          let mime = asyncMIMEType(extname);
          res.writeHead(200, {
            'Content-Type': `${mime};charset=utf-8`,
          });
          res.write(data);
          res.end();
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  login(res) {
    res.writeHead(200, {
      'Content-Type': `text/html;charset=utf-8`,
    });
    res.end('login');
  },
  register(res) {
    res.writeHead(200, {
      'Content-Type': `text/html;charset=utf-8`,
    });
    res.end('register');
  },
  doLogin(res) {
    res.writeHead(200, {
      'Content-Type': `text/html;charset=utf-8`,
    });
    ejs.renderFile('./views/doLogin.html', { a: 'hello ejs' }, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      res.end(data);
    });
  },
  error(res) {
    res.writeHead(200, {
      'Content-Type': `text/html;charset=utf-8`,
    });
    res.end('error');
  },
};

module.exports = app;
