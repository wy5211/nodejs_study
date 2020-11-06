const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String,
  age: Number,
  school: String,
  tel: String
})

// 首字母大写，必须是单数，会找 users
const MyModel = mongoose.model('User', UserSchema);
 

