const url = require('url');
const fs = require('fs');
const path = require('path');

// 根据文件后缀名获取文件类型
const asyncMIMEType = (pathname) => {
  let data = fs.readFileSync('./data/mime.json');
  let mimeObjg = JSON.parse(data.toString());
  return mimeObjg[pathname];
};

const changeRes = (res) => {
  res.send = (data) => {
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=utf-8',
    });
    res.end(data);
  };
};

const initStatic = (req, res, staticPath) => {
  console.log(url.parse(req.url));
  let pathname = url.parse(req.url).pathname;
  // console.log('staticPath', staticPath, pathname);
  pathname = pathname === '/' ? 'index.html' : pathname;
  // 获取后缀名
  let extname = path.extname(pathname);

  if (pathname !== '/favicon.ico') {
    try {
      let data = fs.readFileSync(`./${staticPath}/${pathname}`);
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
};

const service = () => {
  let G = {
    _get: {},
    _post: {},
    static: 'satic',
  };

  let app = (req, res) => {
    changeRes(res);
    initStatic(req, res, G.static);
    let pathname = url.parse(req.url).pathname;
    let method = req.method.toLowerCase();

    if (G[`_${method}`][pathname]) {
      if (method === 'get') {
        G._get[pathname](req, res);
      }
      if (method === 'post') {
        let postData = '';
        req.on('data', (chunk) => (postData += chunk));
        req.on('end', () => {
          req.body = postData;
          G._post[pathname](req, res);
        });
      }
    } else {
      res.writeHead(200, {
        'Content-Type': `text/html;charset=utf-8`,
      });
      res.end('页面不存在');
    }
  };

  app.get = (path, cb) => {
    // 注册方法
    G._get[path] = cb;
  };

  app.post = (path, cb) => {
    G._post[path] = cb;
  };
  // 配置静态web服务
  app.static = (publicPath) => {
    G.static = publicPath;
  };

  return app;
};

module.exports = service();
