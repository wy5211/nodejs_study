const express = require('express')

const app = express()

app.set('view engine', 'ejs')

// 静态资源统一配置, app.use 是中间件
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/news', (req, res) => {
  const str = '模拟数据库数据 - 字符串'
  const arr = [1, 2, 3]
  const obj = {
    username: 'wangyang',
    age: 122
  }
  const htmlStr = '<h3>html 模版</h3>'
  res.render('news.ejs', {
    str,
    arr,
    obj,
    htmlStr
  })
})

app.listen(3000)