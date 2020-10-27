const fs = require("fs");

/*
  fs.stat 检测是文件还是目录

  fs.stat("./html/a.txt", (err, data) => {
    if (err) {
      console.log(err);
    }

    // data.isFile(); // 是不是文件
    // data.isDirectory(); // 是不是文件夹
    console.log(`是文件夹${data.isDirectory()}`);
    console.log(`是文件${data.isFile()}`);
  });

*/

/*
  fs.mkdir 创建文件夹(只能创建文件夹)

  fs.mkdir("./css", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("创建成功");
  });

*/

/*
  fs.writeFile 写入文件

  fs.writeFile("./html/index.html", "hello nodejs 2020.10.21 by wy ", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("文件写入成功");
  });

*/

/* 
  fs.appendFile 追加文件
 
  fs.appendFile("./css/base.css", "body{color: red}\n", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("追加成功");
  });

*/

/* 
  fs.readFile 读取文件
  
  fs.readFile("./html/index.html", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
    console.log(data.toString()); // 将Buffer转成字符串, 也可以在第二个参数写"utf-8"
  });

*/

/*
  fs.readdir 读取目录, 可以读取文件也可以读取目录
  
  fs.readdir("./html", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });

*/

/*
  fs.rename 1.重命名 2.移动文件

  fs.rename("./css/index.css", "./css/a.css", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("成功");
  });
  
  fs.rename("./css/a.css", "./html/index.css", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(成功);
  });

*/

/*
  fs.rmdir 删除目录
  fs.unlink 删除文件
  
  fs.unlink("./aaa/index.html", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("文件删除成功");
  });
  
  fs.rmdir("./aaa", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("删除目录成功");
  });

*/
