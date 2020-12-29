/*
 * @Description: 手撕Promise
 * @Autor: Xdg
 * @Date: 2020-12-28 09:38:09
 * @LastEditors: Xdg
 * @LastEditTime: 2020-12-29 15:28:10
 * @FilePath: \Daily\Javascript\promise.js
 */

const { resolve } = require("path");

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

// Promise 构造函数
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

  // Promises/A+：2.2.6 一个promise实例，可能会调用多次then函数，所以需要一个数组保存then中注册的回调并记录其调用顺序
  this.onFulfilledCallbacks = []; // 保存完成回调
  this.onRejectedCallBacks = []; // 保存拒绝回调

  // 3.定义resolve方法
  const resolve = (value) => {
    resolutionProcedure(this, value);
  };

  // 执行Promise的决议逻辑
  // 决议函数接收2个参数，promise：需要决议的实例，x:决议值，即调用resolve(x)的时候传进去的参数x
  const resolutionProcedure = function (promise, x) {
    // 3.1 判断x和promise是否指向同一个对象
    // Promises/A+：2.3.1 如果promise和x引用相同的对象，则抛出一个TypeError为原因拒绝promise。
    if (x === promise) {
      return reject(new TypeError("Promise can nit resolved with it self"));
    }

    // 3.2 判断x是否是promise
    // Promises/A+：2.3.2 如果x是一个promise，则直接采用它的决议值进行决议
    if (x instanceof Promise) {
      return x.then(resolve, reject);
    }

    // 3.3 判断x是否是thenable
    // Promises/A+：2.3.3 如果x是一个对象或函数：
    if (isObject(x) || isFunction(x)) {
      let called = false;
      try {
        /**
         * Promises/A+：
         * 2.3.3.1 Let then be x.then；
         * 2.3.3.2 如果检索属性x.then导致抛出异常error，则以error为原因拒绝promise；
         */
        // 注意： 在规范中有规定检索属性x.then导致抛出异常error的情况处理，以及
        // 在插件promise-aplus-test的用力中，也有检索属性x.then的时候直接抛出异常的情况，
        // 所以，这里的检索then属性，必须写在try的内部，才能捕获异常。
        let then = x.then;
        if (isFunction(then)) {
          /**
           * Promises/A+：
           * 2.3.3.3 如果then是一个函数，则用x调用它；第一个参数是 resolvePromise，第二个参数是 rejectPromise；
           * 2.3.3.3.3 如果同时调用 resolvePromise 和 rejectPromise，或者多次调用同一个参数，则第一个调用具有优先权，后续的调用将被忽略。（所以需要使用 called 进行控制）
           */
          then.call(
            x,
            (y) => {
              if (called) {
                return;
              }
              called = true;
              // Promises/A+：2.3.3.3.1 如果使用一个值y调用了resolvePromise，则执行[[Resolve]](promise, y)，即我们写的 resolutionProcedure(promise, y);
              resolutionProcedure(promise, y);
            },
            (error) => {
              if (called) {
                return;
              }
              called = true;
              // Promises/A+：2.3.3.3.2 如果使用一个reason调用了rejectPromise，则以这个reason直接拒绝promise;
              reject(error);
            }
          );
          return;
        }
      } catch (error) {
        /**
         * Promises/A+：
         * 2.3.3.3.4 如果调用then函数抛出一个异常：
         * 2.3.3.3.4.1 如果 resolvePromise 或 rejectPromise 被调用，则忽略它。
         * 2.3.3.3.4.2 否则，以error为理由拒绝promise。
         */
        if (called) {
          return;
        }
        called = true;
        reject(error);
      }
    }

    // 3.3 x为其他js基础值，且未决议，则直接决议
    /**
     * Promises/A+：
     * 2.3.3.4 如果then不是一个函数，则用x完成promise；
     * 2.3.4 如果x不是对象或函数，则用x完成promise；
     * 2.1 Promise的决议状态是不能变的，一旦决议了，就不能再进行决议，所以这里要先判断promise是否已经决议
     */
    if (promise.state === PENDING_STATE) {
      promise.state = FULFILLED_STATE;
      promise.value = x;
      /**
       * Promises/A+：
       * 2.2.2.3 onFulfilled函数不允许执行超过一次，即最多只能执行一次
       *   (决议之后，立即执行保存的回调。因为promise只能决议一次，所以，保存的回调也正好只能执行一次)
       * 2.2.6.1 所有的onFulfilled回调，必须按照注册的顺序执行
       */
      promise.onFulfilledCallbacks.forEach((callback) => callback());
    }
  };

  // 4.定义reject方法（reject方法不会解析收到的值，接收到啥值就直接拿该值作为拒绝的理由）
  const reject = (reason) => {
    if (this.state === PENDING_STATE) {
      this.state = REJECTED_STATE;
      this.value = reason;
      /**
       * Promises/A+：
       * 2.2.3.3 onRejected不允许执行超过一次，即最多只能执行一次。
       *   (决议之后，立即执行保存的回调。因为promise只能决议一次，所以，保存的回调也正好只能执行一次)
       * 2.2.6.2 所有的onRejected回调，必须按照注册的顺序执行
       */
      this.onRejectedCallBacks.forEach((callback) => callback());
    }
  };

  // 5.执行fun函数
  try {
    fun(resolve, reject);
  } catch (error) {
    // 这里需要捕获fun函数执行过程中可能出现的错误，如果fun函数执行出错，则直接拒绝promise
    reject(error);
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  // 1. 处理onFulfilled或者onRejected不是函数的情况

  // Promises/A+：2.2.1 onFulfilled 和 onRejected都是可选的，如果他们不是函数，就会被忽略。
  // Promises/A+：2.2.7.3 如果onFulfilled不是函数，而promise1已经是fulfilled，
  // 则promise2必须用promise1的决议值进行决议，所以这里需要添加 (value) => value 直接返回promise1的决议值
  onFulfilled = isFunction(onFulfilled) ? onFulfilled : (value) => value;

  // Promises/A+：2.2.7.4 如果onRejected不是函数，而promise1已经是rejected，
  // 则promise2必须用promise1拒绝的reason进行拒绝，所以这里需要添加 throw error;
  onRejected = isFunction(onRejected)
    ? onRejected
    : (error) => {
        throw error;
      };

  // 2. 创建并返回一个新的promise实例
  // Promises/A+：2.2.7 then函数必须返回一个promise实例;
  return new Promise((resolve, reject) => {
    // 2.1 利用包装函数将onFulfilled和onRejected添加到事件队列（在此，我们使用setTimeout）
    let wrapOnFulfilled = () => {
      setTimeout(() => {
        try {
          // Promises/A+：2.2.5 onFulfilled和onRejected都必须作为函数调用（采用默认调用方式，而非call、apply或者属性的方式）
          let x = onFulfilled(this.value);
          // Promises/A+：2.2.7.1 如果onFulfilled或onRejected返回一个合法值x，就执行Promise决议过程，而非拒绝
          resolve(x);
        } catch (error) {
          //Promises/A+：2.2.7.2 如果onFulfilled或onRejected抛出一个error，就利用error作为reson执行拒绝操作
          reject(error);
        }
      }, 0);
    };

    let wrapOnRejected = () => {
      setTimeout(() => {
        try {
          // Promises/A+：2.2.5 onFulfilled和onRejected都必须作为函数调用（采用默认调用方式，而非call、apply或者属性的方式）
          let x = onRejected(this.value);
          // Promises/A+：2.2.7.1 如果onFulfilled或onRejected返回一个合法值x，就执行Promise决议过程，而非拒绝
          resolve(x);
        } catch (error) {
          // Promises/A+：2.2.7.2 如果onFulfilled或onRejected抛出一个error，就利用error作为reson执行拒绝操作
          reject(error);
        }
      }, 0);
    };

    // 2.2 判断状态
    // Promises/A+：2.2.2 和 2.2.3 onFulfilled 和 onRejected 都只能在promise被决议之后执行
    // 2.2.1 若为FullFilled，则执行onFulfilled
    if (this.state === FULFILLED_STATE) {
      wrapOnFulfilled();
    } else if (this.state == REJECTED_STATE) {
      // 2.2.2 若为rejected，则执行onRejected
      wrapOnRejected();
    } else {
      // 2.2.3 如果promise未决议，则将回调保存在onFulFilledCallbacks和onRejectedCallBacks中，待promise决议之后再执行对应回调
      this.onFulfilledCallbacks.push(wrapOnFulfilled);
      this.onRejectedCallBacks.push(wrapOnRejected);
    }
  });
};

Promise.prototype.catch = function (callback) {
  return this.then(null, callback);
};

// 无论promise成功或失败，finally方法都会执行接收到的回调函数，并且返回一个promise实例
// 1. 如果回调函数执行出错，将以抛出的错误，拒绝新的promise
// 2. 否则，新返回的promise会沿用旧promise的决议值进行决议
Promise.prototype.finally = function (callback) {
  return this.then(
    (data) => {
      callback();
      return data;
    },
    (error) => {
      callback();
      throw error;
    }
  );
};

// 静态方法
// 如果Promise.resolve接收到的是一个promise，则会直接返回这个promise；否则，则会进一步执行决议操作
Promise.resolve = function (value) {
  return value instanceof Promise
    ? value
    : new Promise((resolve) => resolve(value));
};
