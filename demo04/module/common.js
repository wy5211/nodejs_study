exports.MIMEType = (pathname) => {
  switch (pathname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    default:
      return;
  }
};
const fs = require('fs');

// 读取文件操作是异步的
exports.asyncMIMEType = (pathname) => {
  return new Promise((resove, reject) => {
    fs.readFile('./data/mime.json', (err, data) => {
      if (err) {
        reject(err);
      }
      let mimeObjg = JSON.parse(data.toString());
      resove(mimeObjg[pathname]);
    });
  });
};
