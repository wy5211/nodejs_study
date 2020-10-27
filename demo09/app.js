const http = require("http");
const app = require("./module/route");
const ejs = require("ejs");
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "test";
const client = new MongoClient(url, { useUnifiedTopology: true });

http.createServer(app).listen(3000);

app.static("public");

app.get("/", (req, res) => {
  client.connect((err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("数据库连接成功");
    const db = client.db(dbName);
    db.collection("user")
      .find({})
      .toArray((err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        client.close();
        ejs.renderFile("./views/index.ejs", { list: result }, (err, data) => {
          if (err) {
            console.log(err);
            return;
          }
          res.send(data);
        });
      });
  });
});

app.get("/login", (req, res) => {
  ejs.renderFile("./views/login.ejs", {}, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(data);
  });
});

app.post("/doLogin", (req, res) => {
  res.send(req.body);
});

console.log("http://localhost:3000");
