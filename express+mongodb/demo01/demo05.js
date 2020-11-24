const UserModel = require('./model/Schema/user');

// 自定义修饰符 set
// const addUserModel = new UserModel({
//   name: 'wangyang',
//   age: 15,
// });

const addUserModel = new UserModel({
  name: 'abc',
  age: 111,
});

// 自定义修饰符 get(不常用)
console.log(addUserModel.name); // 000abc

addUserModel.save((err, docs) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(docs);
});
