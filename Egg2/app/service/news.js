/*
 * @Description: News
 * @Autor: Xdg
 * @Date: 2020-12-23 10:43:28
 * @LastEditors: Xdg
 * @LastEditTime: 2020-12-23 11:14:25
 * @FilePath: \Daily\Egg2\app\service\news.js
 */

const Service = require("egg").Service;
class NewsService extends Service {
  async list(page = 1) {
    // read config
    const { serverUrl, pageSize } = this.config.news;
    // use build-in http client to GET hacker-news api
    const { data: idList } = await this.ctx.curl(
      `${serverUrl}/topstories.json`,
      {
        data: {
          orderBy: '"key"',
        },
      }
    );
  }
}
