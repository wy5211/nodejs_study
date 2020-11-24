const mongoose = require('../db');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    // index: true, // 该字段作为索引
    // unique: true, // 唯一索引
    // required: true, // 必填
    // minlength: 1,
    // maxlength: 3,
    match: /^abc/i,
    validate: (name) => {
      return name.length > 10;
    },
  },
  age: {
    type: Number,
    max: 150,
    min: 0,
  },
  status: {
    // options: https://mongoosejs.com/docs/schematypes.html#schematype-options
    type: String,
    default: 'abc',
    enum: ['1', '2', '3'],
  },
});

const model = mongoose.model('User', UserSchema, 'users');

model.methods.getOne = () => {};

module.exports = model;
