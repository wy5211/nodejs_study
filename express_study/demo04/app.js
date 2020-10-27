const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// 配置第三方中间件  body-parser , 可以通过 req.body 来获取post值
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  // get 通过 req.query 获取传值
  res.send('首页')
})

app.get('/login', (req, res) => {
  res.render('login.ejs')
})

app.post('/doLogin', (req, res) => {
  // post 可以通过 body-parser 中间件方便获值， 
  const loginData = req.body
  res.send(`do login --- ${JSON.stringify(loginData)}`)
})

app.use((req, res, next) => {
  res.status(404).send('页面不存在')
})

app.listen(5000)