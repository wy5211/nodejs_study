// 大文件复制，边读边写, 管道流
const fs = require('fs');

var readStream = fs.createReadStream('./test_readStream.zip');

var writeStream = fs.createWriteStream('./data/demo.zip');

readStream.pipe(writeStream)