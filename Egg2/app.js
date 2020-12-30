/*
 * @Description: APP
 * @Autor: Xdg
 * @Date: 2020-12-29 19:27:09
 * @LastEditors: Xdg
 * @LastEditTime: 2020-12-29 19:51:02
 * @FilePath: \Daily\Egg2\app.js
 */

module.exports = (app) => {
  app.once("server", (server) => {
    // websocket
    console.log(server);
  });
  app.on("error", (err, ctx) => {
    // report error
    console.log("error", err, ctx);
  });
  app.on("request", (ctx) => {
    // log receive request
    console.log("request", ctx);
  });
  app.on("response", (ctx) => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    // log total cost
    console.log("response", ctx, used);
  });

  // app.cache = new Cache();
};
