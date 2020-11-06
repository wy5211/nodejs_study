const express = require("express");
const path = require('path');

const route = express.Router();

const multer = require('multer')
// 方式一： 配置上传路径， 这种配置无法给文件命名
// const upload = multer({ dest: 'static/upload' })

// 方式二：可以给文件重命名
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'static/upload')
  },
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname)
    cb(null, file.fieldname+extname)
  }
})
 
var upload = multer({ storage: storage })

route.get("/", (req, res) => {
  res.render('admin.html', {})
});

route.get("/add", (req, res) => {
  res.send("admin 列表 增加");
});

route.get("/edit", (req, res) => {
  res.send("admin 列表 编辑");
});

route.post("/do_add", upload.single('some_name'), (req, res) => {
  res.send({
    body: req.body,
    file: req.file // 通过 req.file 可以获取上传的文件
  });
});

route.post("/do_edit", (req, res) => {
  res.send("admin 列表 编辑");
});

module.exports = route;
