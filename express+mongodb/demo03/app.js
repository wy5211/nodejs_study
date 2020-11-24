// const model = require('./model/Schema/order');

// const addModel = new model({
//   uid: 2,
//   trade_no: 22,
//   all_price: 200,
//   all_num: 3,
// });

// addModel.save((err, docs) => {
//   console.log(docs);
// });

// const model = require('./model/Schema/order_item');

// const addModel = new model({
//   order_id: 2,
//   title: 'goods02-2',
//   price: 5,
//   num: 10,
// });

// addModel.save((err, docs) => {
//   console.log(docs);
// });

// 聚合管道

const model = require('./model/Schema/order');

model.aggregate(
  [
    {
      $lookup: {
        from: 'order_item',
        localField: 'uid',
        foreignField: 'order_id',
        as: 'items',
      },
    },
    {
      $match: {
        uid: 1,
      },
    },
  ],
  (err, docs) => {
    console.log(JSON.stringify(docs));
  },
);
