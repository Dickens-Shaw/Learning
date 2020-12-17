/*
 * @Description: ReadFile
 * @Autor: Xdg
 * @Date: 2020-12-17 10:32:02
 * @LastEditors: Xdg
 * @LastEditTime: 2020-12-17 10:33:48
 * @FilePath: \Daily\NodeJs\readFile.js
 */

var fs = require("fs")

var data = fs.readFileSync('input.txt')

console.log(data.toString());

console.log('程序执行结束！');
