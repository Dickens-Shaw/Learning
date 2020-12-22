/*
 * @Description: Router
 * @Autor: Xdg
 * @Date: 2020-12-22 20:24:02
 * @LastEditors: Xdg
 * @LastEditTime: 2020-12-22 20:25:08
 * @FilePath: \Daily\Egg2\app\router.js
 */

 module.exports = app => {
   const { router, controller} = app;
   router.get('/', controller.home.index)
 }