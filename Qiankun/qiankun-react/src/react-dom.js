/*
 * @Description: Render
 * @Autor: Xdg
 * @Date: 2021-01-18 14:58:34
 * @LastEditors: Xdg
 * @LastEditTime: 2021-01-18 15:26:05
 * @FilePath: \Daily\Qiankun\qiankun-react\src\react-dom.js
 */

import { TAG_ROOT } from "./constants";

/**
 * @description: 把一个元素渲染到容器内部
 * @param {*}
 * @return {*}
 */

function render(element, container) {
  let rootFiber = {
    tag: TAG_ROOT, // Fiber的标识，类型
    stateNode: container, // 原生节点，指向真实DOM元素
    props: {
      children: [element], // React元素（VDOM）数组
    },
  };
  scheduleRoot(rootFiber);
}

const ReactDOM = {
  render,
};
export default ReactDOM;
