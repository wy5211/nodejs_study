const { json } = require('express')
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello Express')
})

// 获取数据
app.get('/login', (req, res) => {
  res.send('login')
})

// 增加数据
app.post('/doLogin', (req, res) => {
  res.send('执行登陆')
})

// 修改数据
app.put('/abc', (req, res) => {
  res.send('put 请求')
})

// 删除数据
app.delete('/abc', (req, res) => {
  res.send('delete 请求')
})

// 多个相同路由注意其顺序
app.get('/user/add/some', (req, res) => {
  res.send('/user/adduser 相同路由注意其顺序 add some')
})

// 动态路由 - params 传参
app.get('/user/add/:id', (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  res.send(`user add --- ${id}`)
})

// 动态路由 - query 传参
// http://localhost:3000/news?id=123&uid=4536
app.get('/news', (req, res) => {
  console.log(req.query);
  const { id, uid } = req.query;
  res.send(`news page query ${id} and ${uid}`)
})
 
app.listen(3000)