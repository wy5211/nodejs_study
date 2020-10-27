const express = require('express')

const app = express()

// 4. 内置中间件 - 静态资源统一配置
app.use(express.static('static'))

// 1. 应用级中间件 - 用于权限判断
app.use((req, res, next) => {
  console.log('应用级中间件');
  next()
})

app.get('/', (req, res) => {
  res.send('home page')
})

app.get('/login', (req, res) => {
  res.send('do login')
})

// 2. 路由级中间件
app.get('/news/add', (req, res, next) => {
  console.log('new add');
  next()
})

app.get('/news/:id', (req, res) => {
  const { id } = req.params
  res.send(`news add - ${id}`)
})

// 3. 错误处理中间件
app.use((req, res, next) => {
  res.status(404).send('404')
})

app.listen(3000)