/*
 * @Description: Home
 * @Autor: Xdg
 * @Date: 2020-12-22 19:55:05
 * @LastEditors: Xdg
 * @LastEditTime: 2020-12-22 19:57:35
 * @FilePath: \Daily\Egg2\app\controller\home.js
 */

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
        this.ctx.body = "Hello Shaw";
      }
}

module.exports = HomeController;
