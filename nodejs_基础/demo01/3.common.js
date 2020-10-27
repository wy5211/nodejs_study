// commonjs 是模块化的一个规范, nodejs 是对 commonjs 规范的实现
// 模块导出的两种方式
// 整体导出 module.exports
// 单个导出 expots.xxx

var module = require("./module/modules");

console.log("module", module);

// 默认找 node_modules 下的对应文件夹的index.js
var axios = require("axios");
axios.get();
axios.post();

// 如果文件夹下没有index.js , 从 package.json 中找main(入口)
const db = require("db");
db.find();
