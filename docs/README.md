时间：2020 年 10 月开始
王阳的 nodejs 笔记

### demo01

- http 模块，创建服务
- url 模块，解析地址栏传过来的 url
- commonjs 导出规范，npm 包导入规则
- npm 包的规范

### demo02

- fs 模块

### demo03

- 以文件流的形式，读写文件
  - fs.createReadStream()
  - fs.createWriteStream()
- 大文件复制，边读边写

### demo04

- 搭建 web 静态服务器
- 同步读取文件 fs.readFileSync()

### demo05

- 引入路由

### demo06

- 路由模块封装
- ejs 简单使用

### demo07

- 使用 nodejs 封装 express 中的路由

### demo08

- MongoDb 下载地址 https://www.mongodb.com/try/download/community
- 需要配置环境变量

#### mongo 命令 []表示可选的

- show dbs 有哪些数据库
- use [数据库名字] 创建数据库(存在切换,不存在创建)
- 新创建的数据库必须添加了数据才能创建成功
- db.use.[user].insert({'username': 'zhangsan', 'age': 18}) 这里的集合名(user)相当于关系型数据库中的表,给 user 集合中插入一条数据
- show collections 看该数据库下有哪些集合
- db.[user].find() 查找该集合(user)下的数据
- db.dropDatabase() 删除数据库
- db.[user].drop() 删除 user 这个集合

##### 条件查找

- db.[user].find({'age': 18}) 查找 age 为 18 的
