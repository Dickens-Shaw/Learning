/*
 * @Description: ReadFile
 * @Autor: Xdg
 * @Date: 2020-12-17 10:32:02
 * @LastEditors: Xdg
 * @LastEditTime: 2020-12-17 10:41:37
 * @FilePath: \Daily\NodeJs\readFile.js
 */

var fs = require("fs");

fs.readFile("input.txt", function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log("程序执行结束!");
