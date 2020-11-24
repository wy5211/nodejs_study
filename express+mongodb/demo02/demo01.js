const model = require('./model/Schema/user');

// 增
const addModel = new model({
  age: 132,
  status: '1',
  name: 'Abc1234',
});

addModel.save((err, docs) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(docs);
});
