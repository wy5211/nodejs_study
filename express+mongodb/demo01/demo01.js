// 1. 引入
const mongoose = require('mongoose');

// 2. 建立链接
mongoose.connect('mongodb://127.0.0.1:27017/eggcms');


// 3. 定义 Schema，和 collections 集合的字段对应
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String,
  age: Number,
  school: String,
  tel: String
})


// 4. 三个参数，第一个首字母必须大写，对应复数的 collections（ User 对应 users ），第二个参数为 Schema， 第三个参数可选表示手动指定collections
// 1) 默认操作 users
// const MyModel = mongoose.model('User', UserSchema);

// 2）默认操作第三个参数选择的集合
const MyModel = mongoose.model('User', UserSchema, 'users');


// 4.1 数据查询
 MyModel.find({}, (err, data) => {
  if (err) {
    console.log(err);
    return
  }
  console.log('data', data);
 })


// 4.2 增加数据，要实例化 model 
const add = new MyModel({
  name: 'wangyang',
  age: 18,
  sex: '男',
  school: 'chslafsf',
  tel: '1343245234'
});

add.save((err) => {
  if (err) {
    console.log(err);
    return
  }
  console.log('增加成功');
})


// 4.3 更新数据 MyModel.updateOne & MyModel.update 都可以
MyModel.updateOne({'_id': '5fa51a5561930aa22a78a3b1' }, { 'name': '张三' }, (err, doc) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(doc);
})


// 4.4 删除数据
MyModel.deleteOne({ '_id': '5faa5b95637913731979533f' }, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('删除成功');
})


 

