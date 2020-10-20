const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html;charset='utf-8'" });

    res.write("<head><meta charset='UTF-8'></head>");

    res.write("first nodejs , test 中文aaa");

    if (req.url !== "/favicon.ico") {
      console.log(url.parse(req.url, true).query);
    }

    res.end();
  })
  .listen(8888);

console.log("wy-->Server running at http://127.0.0.1:8888/");
