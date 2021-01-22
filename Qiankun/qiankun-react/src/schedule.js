/*
 * @Description: 调度
 * @Autor: Xdg
 * @Date: 2021-01-18 15:27:04
 * @LastEditors: Xdg
 * @LastEditTime: 2021-01-22 08:44:57
 * @FilePath: \Daily\Qiankun\qiankun-react\src\schedule.js
 */

import {
  ELEMENT_TEXT,
  TAG_HOST,
  TAG_ROOT,
  TAG_TEXT,
  PLACEMENT,
} from "./constants";
import { setProps } from "./utils";

/**
 * 从根节点开始渲染和调度
 * 两个阶段
 * diff阶段 对比新旧的虚拟DOM，进行增量更新或创建
 ** render阶段
    比较花时间，拆分任务，拆分维度VDOM，可暂停
    成果如果是effect list知道节点的增删改
    两个任务：根据虚拟DOM生成fiber树&收集effectlist
 * commit阶段 DOM更新或创建，不能暂停
 */

/**
 * @description: 调度
 * @param {*} rootFiber 
 * {
    tag: TAG_ROOT, // Fiber的标识，类型
    stateNode: container, // 原生节点，指向真实DOM元素
    props: {
      children: [element], // React元素（VDOM）数组
    }
 * @return {*}
 */

let nextUnitOfWork = null; // 下一个工作单元
let workInProgressRoot = null; // RootFiber应用的根
export function scheduleRoot(rootFiber) {
  workInProgressRoot = rootFiber;
  nextUnitOfWork = rootFiber;
}

function performUnitOfWork(currentFiber) {
  beginWork(currentFiber);
  if (currentFiber.child) {
    return currentFiber.child;
  }
  while (currentFiber) {
    completeUnitOfWork(currentFiber);
    if (currentFiber.sibling) {
      return currentFiber.sibling;
    }
    currentFiber = currentFiber.return;
  }
}

// 开始工作
// 1.创建真实DOM 2.创建子fiber
function beginWork(currentFiber) {
  if (currentFiber.tag === TAG_ROOT) {
    updateHostRoot(currentFiber);
  } else if (currentFiber.tag === TAG_TEXT) {
    updateHostText(currentFiber);
  } else if (currentFiber.tag === TAG_HOST) {
    updateHost(currentFiber);
  }
}

function updateHostRoot(currentFiber) {
  // 先处理自己 如果是一个原生节点，创建真实DOM
  let newChildren = currentFiber.props.children;
  // 创建子Fiber
  reconcileChildren(currentFiber, newChildren);
}
function reconcileChildren(currentFiber, newChildren) {
  let newChildIndex = 0;
  let prevSibling;
  // 遍历子VDOM元素数组，为每个VDOM元素创建子Fiber
  while (newChildIndex < newChildren.length) {
    let newChild = newChildren[newChildIndex]; // 取出元素节点
    let tag;
    if (newChild.type === ELEMENT_TEXT) {
      tag = TAG_TEXT; // 文本节点
    } else if (typeof newChild.type === "string") {
      tag = TAG_HOST;
    }
    let newFiber = {
      tag,
      type: newChild.type,
      prps: newChild.props,
      stateNode: null,
      return: currentFiber,
      effectTag: PLACEMENT, // 副作用标识 render收集副作用增加、更新、删除
      nextEffect: null, // effect list也是一个单链表
      // effect list顺序和完成顺序是一样的
    };
    if (newFiber) {
      if (newChildIndex === 0) {
        currentFiber.child = newFiber;
      } else {
        prevSibling.prevSibling = newFiber;
      }
      prevSibling = newFiber;
    }
    newChildIndex++;
  }
}

function updateHostText(currentFiber) {
  if (!currentFiber.stateNode) {
    // 如果此fiber没有创建DOM节点
    currentFiber.stateNode = createDOM(currentFiber);
  }
}
function updateHost(currentFiber) {
  if (!currentFiber.stateNode) {
    // 如果此fiber没有创建DOM节点
    currentFiber.stateNode = createDOM(currentFiber);
  }
  const newChildren = currentFiber.props.children;
  reconcileChildren(currentFiber, newChildren);
}
function createDOM(currentFiber) {
  if (currentFiber.tag === TAG_TEXT) {
    return document.createTextNode(currentFiber.props.text);
  } else if (currentFiber.tag === TAG_HOST) {
    let stateNode = document.createElement(currentFiber.type);
    updateDOM(stateNode, {}, currentFiber.props);
    return stateNode;
  }
}
function updateDOM(stateNode, oldProps, newProps) {
  setProps(stateNode, oldProps, newProps);
}

// 结束工作
// completeUnitOfWork 收集有副作用的fiber，组成effect list

// 每个fiber有两个属性 firstEffect(指向第一个有副作用的子fiber) lastEffect(指向最后一个)
// 中间的用nextEffect做成一个单链表
function completeUnitOfWork(currentFiber) {
  let returnFiber = currentFiber.return;
  if (returnFiber) {
    if (!returnFiber.firstEffect) {
      returnFiber.firstEffect = currentFiber.firstEffect;
    }
    if (returnFiber.lastEffect) {
    }
    const effectTag = currentFiber.effectTag;
    if (effectTag) {
      // 有副作用
      if (returnFiber.lastEffect) {
        returnFiber.lastEffect.nextEffect = currentFiber;
      } else {
        returnFiber.firstEffect = currentFiber;
      }
      returnFiber.lastEffect = currentFiber;
    }
  }
}

function workLoop(deadline) {
  let shouldYield = false; // 是否让出时间片（控制权）
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }
  if (!nextUnitOfWork) {
    console.log("render阶段结束");
  }
  requestIdleCallback(workLoop, { timeout: 500 });
}

// 有一个优先级概念 expirationTime
requestIdleCallback(workLoop, { timeout: 500 });
