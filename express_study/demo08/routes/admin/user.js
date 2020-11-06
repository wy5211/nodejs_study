const { json } = require("body-parser");
const express = require("express");

const route = express.Router();

// 文件上传封装
const tools = require('../../utils/tool');
 
route.get("/", (req, res) => {
  res.render('admin.html', {})
});
 
route.get("/add", (req, res) => {
  res.send("admin 列表 增加");
});

route.get("/edit", (req, res) => {
  res.send("admin 列表 编辑");
}); 

// 只上传一个文件
// route.post("/do_add", upload.single('some_name'), (req, res) => {
//   res.send({
//     body: req.body,
//     file: req.file // 通过 req.file 可以获取上传的文件
//   });
// });

// 上传多个文件
var cpUpload = tools.multer().fields([{ name: 'fileName1', maxCount: 1 }, { name: 'fileName2', maxCount: 1 }])
route.post("/do_add", cpUpload, (req, res) => {
  res.send({
    body: req.body,
    file: req.files // 上传多个文件，通过 req.files 可以获取上传的文件
  });
});

route.post("/do_edit", (req, res) => {
  res.send("admin 列表 编辑");
});

module.exports = route;
