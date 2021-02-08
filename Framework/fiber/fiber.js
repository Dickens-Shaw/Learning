/*
 * @Description: Fiber
 * @Autor: Xdg
 * @Date: 2021-01-15 11:44:58
 * @LastEditors: Xdg
 * @LastEditTime: 2021-01-15 15:19:31
 * @FilePath: \Daily\React\fiber\fiber.js
 */

function sleep(delay) {
  for (var start = Date.now(); Date.now() - start <= delay; ) {}
}

let A1 = { type: "div", key: "A1" };
let B1 = { type: "div", key: "B1", return: A1 };
let B2 = { type: "div", key: "B2", return: A1 };
let C1 = { type: "div", key: "C1", return: B1 };
let C2 = { type: "div", key: "C2", return: B1 };
A1.child = B1;
B1.sibling = B2;
B1.child = C1;
C1.sibling = C2;

let nextUnitOfWork = null; // 下一个执行单元
let startTime = Date.now();

function workLoop(deadline) {
  console.log(deadline);
  while (
    (deadline.timeRemaining() > 1 || deadline.didTimeout) &&
    nextUnitOfWork
  ) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }
  if (!nextUnitOfWork) {
    console.log("render阶段结束");
    console.log(Date.now() - startTime);
  } else {
    requestIdleCallback(workLoop, { timeout: 1000 });
  }
}

function performUnitOfWork(fiber) {
  beginWork(fiber);
  if (fiber.child) {
    return fiber.child;
  }
  while (fiber) {
    completeUnitOfWork(fiber);
    if (fiber.sibling) {
      return fiber.sibling;
    }
    fiber = fiber.return;
  }
}

function beginWork(fiber) {
  sleep(20);
  console.log("开始", fiber.key);
}

function completeUnitOfWork(fiber) {
  console.log("结束", fiber.key);
}

nextUnitOfWork = A1;
requestIdleCallback(workLoop, { timeout: 1000 });
