const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://127.0.0.1:27017/eggcms',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('数据库连接成功');
  },
);

module.exports = mongoose;
