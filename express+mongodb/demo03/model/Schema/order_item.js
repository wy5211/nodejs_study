const mongoose = require('../db');

const OrderSchema = mongoose.Schema({
  order_id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    maxlength: 10,
    minlength: 1,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  num: {
    type: Number,
    required: true,
  },
});

const model = mongoose.model('Order_Item', OrderSchema, 'order_item');

// 静态方法 通过 model.someFn 调用
// model.statics.someFn = () => {}

// 实例方法 通过 new model().someFn 调用
// model.methods.someFn = () => {}

module.exports = model;
