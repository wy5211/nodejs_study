const mongoose = require('../db');

const OrderSchema = mongoose.Schema({
  uid: {
    required: true,
    type: Number,
  },
  trade_no: {
    type: Number,
    required: true,
  },
  all_price: {
    type: Number,
    required: true,
  },
  all_num: {
    type: Number,
    required: true,
  },
});

const model = mongoose.model('Order', OrderSchema, 'order');

// 静态方法 通过 model.someFn 调用
// model.statics.someFn = () => {}

// 实例方法 通过 new model().someFn 调用
// model.methods.someFn = () => {}

module.exports = model;
