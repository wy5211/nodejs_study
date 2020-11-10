// test again
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/eggcms');

const NewSchema = mongoose.Schema({
  title: String,
  author: String,
  time: Number,
  status: Number
})

const NewModel = mongoose.model('New', NewSchema, 'news');

// 增加数据
// const addNew = new NewModel({
//   title: '22222',
//   author: '22222',
//   time: 22222,
//   status: 1
// })
// addNew.save((err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(res);
// })


// 删除数据
// NewModel.deleteOne({ title: '11111' }, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('删除成功');
// })


// 更新数据
// NewModel.updateOne({ _id: '5faa61f9d1b74d756e10cbc1' }, { title: '33333' }, (err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(res);
// })


// 查询数据
NewModel.find({}, (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res);
})