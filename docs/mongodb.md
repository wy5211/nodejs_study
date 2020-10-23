# mongodb

- MongoDb 下载地址 https://www.mongodb.com/try/download/community

- windows 需要配置环境变量
- mac 配置 参考 https://www.runoob.com/mongodb/mongodb-osx-install.html

### mongodb 命令 []表示可选的

- show dbs 有哪些数据库
- use [数据库名字] 创建数据库(存在切换,不存在创建)
- 新创建的数据库必须添加了数据才能创建成功
- db.use.[user].insert({'username': 'zhangsan', 'age': 18}) 这里的集合名(user)相当于关系型数据库中的表,给 user 集合中插入一条数据
- show collections 看该数据库下有哪些集合
- db.[user].find() 查找该集合(user)下的数据
- db.dropDatabase() 删除数据库
- db.[user].drop() 删除 user 这个集合

### 条件查找

- db.[user].find({'age': 18}) 查找 age 为 18 的
- db.[user].find({'age': {\$gt:18}}) 查找 age 大于 18 的
- db.[user].find({'age': {\$gte:18}}) 查找 age 大于等于 18 的
- db.[user].find({'age': {$get: 10, $lte: 18}}) 大于 10 小于 18
- db.[user].find({'name': /zhang/}) 模糊查找包含 zhang
- db.[user].find({'name': /^z/}) 模糊查找包含 z 开头的
- db.[user].find({}, {username: 1}) 只查找 username 这一列
- db.[user].find({'age':{\$gt:18}}, {username: 1}) 只查找年龄大于 18 的 username 这一列
- db.[user].find()sort({'age': 1}) 年龄升序 -1 为降序

### 多条件查找

- db.[user].find({'username': 'lisi', 'age': 22}) 查找 username 为 lisi，age 为 22 的
- db.[user].find().limit(5) 查询前 5 条数据
- db.[user].find().skip(10) 查询第 10 条后的数据（可用于分页）
- db.[user].find().skip(2).limit(5) 跳过前两条，从第三条开始查 5 条

- db.[user].find().count() 统计数量

- db.[user].find().skip(page - 1).limit(pageSize) page 当前的页码， pageSize 一页的数量

- db.[user].find({\$or: [{'name': 'lisi'}, {'name': 'wangwu'}]}) 查询 name 为 lisi 或者 wangwu

### 修改数据

- db.[user].update({'name': 'zhangsan'}, {\$set: {'name': '张三'}}) 把 zhangsan 更新为 张三
- db.[user].update({'name': 'wangwu', 'age': 18}, {\$set: {'sex': '女'}}) 给 name 为 wangwu age 为 18 新增 sex 字端
- 更新数据不加 \$set 则是完整替换

### 批量修改

- db.[user].update({'age': 18}, {\$set: {'age': 100}}, {multi: true}) 将所有 age 为 18 的改为 100

### 删除数据

- db.[user].remove({}) 删除 user 里面所有数据
- db.[user].remove({'age': {\$gte: 18}}) 删除年龄大于 18 的
- db.[user].remove({'age': {\$gte: 18}}, {justOne: true}) 删除年龄大于 18 的,只删除一条

### 添加索引，可以优化查找速度, 在数据特别大时候优化更明显

- db.[user].find({'username': 'zhangsan'}).explain('executionStats') 后面加.explain 可以输出执行时间等信息
- db.[user].ensureIndex({'username': 1}) 将 username 作为索引，默认的索引是 \_id
- db.[user].getIndexes() 获取当前集合的索引
- db.[user].dropIndex({'username': 1}) 删除索引的命令

### 复合索引

- db.[user].ensureIndex({'username': 1, 'age': 18})
  - 查询 username & age 可以命中索引
  - 单查 username 可以命中索引
  - 单查 age 不能命中索引

### 唯一索引

- db.[user].ensureIndex({'userId': 1}, {'unique': true}) 将 userId 设置为唯一索引，设置成唯一索引后就不能重复了

### tip

- 可以使用 js 语法 for 循环给集合加数据

### mongodb 权限配置

### mongodb 聚合管道

![聚合管道](./docs/img/mongodb01.jpg)
