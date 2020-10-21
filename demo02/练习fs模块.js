// 1. 判断服务器上有没有upload目录,没有的话创建,有的话不做操作(图片上传)
const fs = require("fs");

fs.stat("./upload", (err, data) => {
  if (err) {
    // 执行创建目录
  }

  if (data.isDirectory()) {
    console.log("已经存在");
  } else {
    // 可能有同名的文件,先删除在创建
    fs.unlink();
    fs.mkdir();
  }
});

// 2. wwwroot 文件夹下有images css js 以及index.html,
