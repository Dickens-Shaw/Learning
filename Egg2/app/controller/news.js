/*
 * @Description: News
 * @Autor: Xdg
 * @Date: 2020-12-23 10:20:30
 * @LastEditors: Xdg
 * @LastEditTime: 2020-12-23 10:34:25
 * @FilePath: \Daily\Egg2\app\controller\news.js
 */

const Controller = require("egg").Controller;

class NewsController extends Controller {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: "this is news 1", url: "/news/1" },
        { id: 2, title: "this is news 2", url: "/news/2" },
      ],
    };
    await this.ctx.render("news/list.tpl", dataList);
  }
}

module.exports = NewsController;
