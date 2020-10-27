const fs = require('fs');
const url = require('url');
const path = require('path');

let asyncMIMEType = (pathname) => {
  let data = fs.readFileSync('./data/mime.json');
  let mimeObjg = JSON.parse(data.toString());
  return mimeObjg[pathname];
};

exports.static = (req, res, staticPath) => {
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
};
