const fs = require('fs');

let str = '';

for (let i = 0; i < 1000; i++) {
  str += 'writeSteam Test By 王阳';
}

const writeStream = fs.createWriteStream('./data/writeFile.txt');

writeStream.write(str);

// 结束标记，有了 end() 才会执行后面的 finish
writeStream.end();

writeStream.on('finish', () => {
  console.log('写入完成');
});
