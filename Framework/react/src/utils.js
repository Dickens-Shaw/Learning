/*
 * @Description: Utils
 * @Autor: Xdg
 * @Date: 2021-01-20 14:46:02
 * @LastEditors: Xdg
 * @LastEditTime: 2021-01-20 14:50:27
 */

export function setProps(dom, oldProps, newProps) {
  for (let key in oldProps) {
  }
  for (let key in newProps) {
    if (key !== "children") {
      setProp(dom, key, newProps[key]);
    }
  }
}

function setProp(dom, key, value) {
  if (/^on/.test(key)) {
    dom[key.toLowerCase] = value; // 没有用合成事件
  } else if (key === "style") {
    if (value) {
      for (let styleName in value) {
        dom.stlye[styleName] = value[styleName];
      }
    }
  } else {
    dom.setAttribute(key, value);
  }
}
