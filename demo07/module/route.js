const url = require('url');

const changeRes = (res) => {
  res.send = (data) => {
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=utf-8',
    });
    res.end(data);
  };
};

const service = () => {
  let G = {};
  G._get = {};
  G._post = {};

  let app = (req, res) => {
    changeRes(res);
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
          // res.end(postData);
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

  return app;
};

module.exports = service();
