/*
 * @Description: Server
 * @Autor: Xdg
 * @Date: 2020-12-17 09:50:24
 * @LastEditors: Xdg
 * @LastEditTime: 2020-12-17 10:00:59
 * @FilePath: \Daily\NodeJs\server.js
 */

var http = require('http');

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.end("Hello World\n");
  })
  .listen(8888);

console.log("Server running at http://127.0.0.1:8888");
