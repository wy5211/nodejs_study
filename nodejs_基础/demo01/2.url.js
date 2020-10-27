const url = require("url");

const tempUrl = "http://www.abc.com/hello_nodejs?a=1&b=2";

// true 表示解析成对象
console.log(url.parse(tempUrl, true).query);
