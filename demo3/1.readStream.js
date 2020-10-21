const fs = require('fs');

const readStream = fs.createReadStream('./data/readFileTest.txt')

let str;
let count = 0;
readStream.on('data', (thunk) => { // 文件过大会一点一点读
  str += thunk;
  count++;
})

readStream.on('end', () => {
  console.log('sign', count, 'str');
})

readStream.on('error', (err) => {
  console.log(error);
})