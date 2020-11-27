// https://docs.mongodb.com/drivers/node/quick-start
const { MongoClient, ObjectID } = require('mongodb');
const { dbUrl, dbName } = require('./db.config');

class Db {
  static dbInstance() {
    // 单例模式，只能实例化一次
    if (!Db.instance) {
      Db.instance = new Db();
    }
    return Db.instance;
  }
  constructor() {
    console.log('数据库只实例化一次');
    this.dbClient = null;
    // 实例化的时候就连接，可以提高性能
    this.connect();
  }
  connect() {
    return new Promise((resolve, reject) => {
      if (!this.dbClient) {
        // 保证数据库只连接一次
        MongoClient.connect(
          dbUrl,
          { useUnifiedTopology: true },
          (err, client) => {
            if (err) {
              console.log(err);
              reject(err);
            }
            const db = client.db(dbName);
            console.log('数据库只连接一次');
            this.dbClient = db;
            resolve(db);
          },
        );
      }
      resolve(this.dbClient);
    });
  }
  find(name, query = {}) {
    return new Promise((resolve, reject) => {
      this.connect().then((dataBase) => {
        const data = dataBase.collection(name).find(query);
        data.toArray((err, data) => {
          if (err) {
            console.log(err);
            reject(err);
          }
          resolve(data);
        });
      });
    });
  }
  insert(name, data) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        db.collection(name).insertOne(data, (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        });
      });
    });
  }
  update(name, old, data) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        db.collection(name).updateOne(old, { $set: data }, (err, result) => {
          if (err) reject(err);
          resolve(result);
        });
      });
    });
  }
  remove(name, data) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        db.collection(name).removeOne(data, (err, result) => {
          if (err) reject(err);
          resolve(result);
        });
      });
    });
  }
  getObjectID(id) {
    // 通过 _id 查询数据时，需要包装成 Object('asfsadfasxasdf') 的形式
    return new ObjectID(id);
  }
}

module.exports = new Db();
