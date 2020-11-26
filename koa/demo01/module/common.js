const { resolveCname } = require('dns');
const { reject } = require('_any-promise@1.3.0@any-promise');

exports.getPostValue = (ctx) => {
  return new Promise((resolve, reject) => {
    try {
      let postVal = '';
      ctx.req.on('data', (chunk) => {
        postVal += chunk;
      });
      ctx.req.on('end', () => {
        console.log(postVal);
        resolve(postVal);
      });
    } catch (err) {
      reject(err);
    }
  });
};
