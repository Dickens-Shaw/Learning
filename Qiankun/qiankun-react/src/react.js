/*
 * @Description: React
 * @Autor: Xdg
 * @Date: 2021-01-18 14:13:14
 * @LastEditors: Xdg
 * @LastEditTime: 2021-01-18 15:24:49
 * @FilePath: \Daily\Qiankun\qiankun-react\src\react.js
 */

import { ELEMENT_TEXT } from "./constants";

/**
 * @description: 创建元素（虚拟DOM）的方法
 * @param {*} type 元素的类型 div span p
 * @param {*} config 配置对象 属性 key ref
 * @param {...any} children 子元素数组
 * @return {*}
 */
console.log(ELEMENT_TEXT);
function createElement(type, config, ...children) {
  delete config._self;
  delete config._source; //元素在哪行哪列哪个文件生成
  return {
    type,
    props: {
      ...config,
      children: children.map((child) => {
        return typeof child === "object"
          ? child
          : {
              type: ELEMENT_TEXT,
              props: {
                text: child,
                children: [],
              },
            };
      }),
    },
  };
}

const React = {
  createElement,
};

export default React;
