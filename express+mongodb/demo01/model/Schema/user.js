const mongoose = require('../db');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    set(params) {
      // 对输入的值进行处理
      const prefix = 'some-pre-fix';
      return prefix + params;
    },
    get(params) {
      return '0000' + params;
    },
  },
  age: Number,
  status: {
    // 设定默认值
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model('User', UserSchema, 'users');
