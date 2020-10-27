// 1. npm i mongodb --save
// 2. 引入mongodb
const { MongoClient } = require('mongodb');

// 3. 定义数据库连接地址
// 在终端输入mongo命令可以得到，不设置的权限的情况
const url = 'mongodb://127.0.0.1:27017';

// 4. 定义要操作的数据库的名字
const dbName = 'test';

// 5. 实例化MongoClient，传入要连接的url
const client = new MongoClient(url, { useUnifiedTopology: true });

// 6. 连接数据库
client.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('数据库连接成功');
  // 实例化具体的数据库
  const db = client.db(dbName);

  // a. 差询数据，异步的
  // db.collection('user')
  //   .find({ age: { $gt: 900 } })
  //   .toArray((err, data) => {
  //     if (err) {
  //       console.log(err);
  //       return [];
  //     }
  //     console.log(data);
  //     client.close();
  //   });

  // b. 增加数据
  // db.collection('user').insertOne(
  //   {
  //     username: 'nodejs 操作mongodb新增数据',
  //     age: 90,
  //   },
  //   (err, result) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     console.log('数据添加成功');
  //     console.log('result', result);
  //     client.close();
  //   },
  // );

  // c. 更新数据
  // db.collection('user').updateOne(
  //   { username: 'zhangsan0' },
  //   { $set: { age: 1000 } },
  //   (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     console.log(data);
  //     client.close();
  //   },
  // );

  // d. 删除数据
  // (1) 删除一条
  // db.collection('user').deleteOne({ username: 'nodejs' }, (err) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log('删除一条数据');
  //   client.close();
  // });

  // （2）删除多条
  db.collection('user').deleteMany({ username: 'nodejs' }, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('删除多条数据');
    client.close();
  });
});
