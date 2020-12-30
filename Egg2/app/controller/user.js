/*
 * @Description: User
 * @Autor: Xdg
 * @Date: 2020-12-29 19:47:57
 * @LastEditors: Xdg
 * @LastEditTime: 2020-12-29 19:50:39
 * @FilePath: \Daily\Egg2\app\controller\user.js
 */

const { Controller } = require("egg");

class UserController extends Controller {
  async fetch() {
    this.ctx.body = this.app.cache.get(this.ctx.query.id);
  }
}

module.exports = UserController;
