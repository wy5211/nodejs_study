const http = require('http');
const app = require('./module/route');
const ejs = require('ejs');

http.createServer(app).listen(3000);

app.static('public');

app.get('/', (req, res) => {
  res.send('首页');
});

app.get('/login', (req, res) => {
  ejs.renderFile('./views/login.ejs', {}, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(data);
  });
});

app.post('/doLogin', (req, res) => {
  res.send(req.body);
});
