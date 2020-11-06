const express = require("express");
const path = require('path');

const route = express.Router();

const multer = require('multer')
// 方式一： 配置上传路径， 这种配置无法给文件命名
// const upload = multer({ dest: 'static/upload' })

// 方式二：可以给文件重命名
const storage = multer.diskStorage({
  destination:  (req, file, cb) => {
    cb(null, 'static/upload')
  },
  filename: (req, file, cb) => {
    const {originalname,fieldname } = file
    const extname = path.extname(originalname)
    cb(null, fieldname+extname)
  }
})
 
const upload = multer({ storage: storage })

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
const cpUpload = upload.fields([{ name: 'fileName1', maxCount: 1 }, { name: 'fileName2', maxCount: 1 }])
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
