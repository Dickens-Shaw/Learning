/*
 * @Description: 手写Promise
 * @Autor: Xdg
 * @Date: 2020-12-28 09:38:09
 * @LastEditors: Xdg
 * @LastEditTime: 2020-12-28 10:49:48
 * @FilePath: \Daily\Javascript\promise.js
 */

// 1. 定义表示promise状态的常量
const PENDING_STATE = "status";
const FULFILLED_STATE = "fulfilled";
const REJECTED_STATE = "rejected";

// 2. 定义可复用的工具方法
const isFunction = function (fun) {
  return typeof fun == "function";
};

const isObject = function (value) {
  return value && typeof value === "object";
};

// Promise 构造函数内部，主要做5件事
function Promise(fun) {
  // 1. 基本的判断：判断Promise构造函数是否通过new调用，以及调用时传入的参数fn是否是一个函数
  // 1.1 判断是否通过new调用
  if (!this || this.constructor !== Promise) {
    throw new TypeError("Promise must be called with new");
  }
  if (!isFunction(fun)) {
    throw new TypeError("Promise constructor's argument must be a function");
  }

  // 2.定义promise实例的基本属性
  this.state = PENDING_STATE; // promise实例的状态
  this.value = void 0; // promise的决议值

  // Promise/A+：一个promise实例，可能会调用多次then函数，所以需要一个数组保存then中注册的回调并记录其调用顺序
  this.onFulfilledCallbacks = []; // 保存完成回调
  this.onRejectedCallBacks = []; // 保存拒绝回调

  // 3.定义resolve方法
  // 4.定义reject方法
  // 5.执行fun函数
}
