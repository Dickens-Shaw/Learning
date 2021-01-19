/*
 * @Description: 调度
 * @Autor: Xdg
 * @Date: 2021-01-18 15:27:04
 * @LastEditors: Xdg
 * @LastEditTime: 2021-01-19 08:56:28
 * @FilePath: \Daily\Qiankun\qiankun-react\src\schedule.js
 */

import {
  ELEMENT_TEXT,
  TAG_HOST,
  TAG_ROOT,
  TAG_TEXT,
  PLACEMENT,
} from "./constants";

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
function scheduleRoot(rootFiber) {
  workInProgressRoot = rootFiber;
  nextUnitOfWork = rootFiber;
}

function performUnitOfWork(currentFiber) {
  beginWork(currentFiber);
}

// 开始工作
// 1.创建真实DOM 2.创建子fiber
function beginWork(currentFiber) {
  if (currentFiber.tag === TAG_ROOT) {
    updateHostRoot(currentFiber);
  }
}

function updateHostRoot(currentFiber) {
  // 先处理自己 如果是一个原生节点，创建真实DOM
  let newChildren = currentFiber.props.children;
  reconcileChildren(currentFiber, newChildren);
}

function reconcileChildren(currentFiber, newChildren) {
  let newChildIndex = 0;
  let prevSibling;
  while (newChildIndex < newChildren.length) {
    let newChild = newChildren[newChildIndex]; // 取出元素节点
    let tag;
    if (newChild.type === ELEMENT_TEXT) {
      tag = TAG_TEXT;
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
      nexTEffect: "",
    };
  }
}

// 结束工作
// completeUnitOfWork

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
