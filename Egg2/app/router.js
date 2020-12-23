/*
 * @Description: Router
 * @Autor: Xdg
 * @Date: 2020-12-22 20:24:02
 * @LastEditors: Xdg
 * @LastEditTime: 2020-12-23 10:28:46
 * @FilePath: \Daily\Egg2\app\router.js
 */

module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/news", controller.news.list);
};
