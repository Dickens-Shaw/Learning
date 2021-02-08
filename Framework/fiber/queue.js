/*
 * @Description: queue
 * @Autor: Xdg
 * @Date: 2021-01-15 11:03:27
 * @LastEditors: Xdg
 * @LastEditTime: 2021-01-15 11:45:08
 * @FilePath: \Daily\React\queue.js
 */

class Update {
  constructor(payload, nextUpdate) {
    this.payload = payload;
    this.nextUpdate = nextUpdate;
  }
}

class UpdateQueue {
  constructor() {
    this.baseState = null; // 原状态
    this.firstUpadate = null; // 第一个更新
    this.lastUpadate = null; // 最后一更新
  }
  enqueueUpdate(upadate) {
    if (this.firstUpadate == null) {
      this.firstUpadate = this.lastUpadate = upadate;
    } else {
      this.lastUpadate.nextUpdate = upadate; // 上一个last的nextUpdate指向自己
      this.lastUpadate = upadate; // 更新last
    }
  }
  // 获取状态，遍历链表，进行更新
  forceUpdate() {
    let currentState = this.baseState || {}; // 初始状态
    let currentUpdate = this.firstUpadate;
    while (currentUpdate) {
      let nextState =
        typeof currentUpdate.payload == "function"
          ? currentUpdate.payload(currentState)
          : currentUpdate.payload;
      currentState = { ...currentState, ...nextState }; // 使用当前更新得到新的状态
      currentUpdate = currentUpdate.nextUpdate; // 找下一个节点
    }
    this.firstUpadate = this.lastUpadate = null; // 跟新完成后把链表清空
    this.baseState = currentState;
    return currentState;
  }
}

// 计数器 {number:0} setState({number:1}) setState((state)=>({number:state.number+1}))
let queue = new UpdateQueue();
queue.enqueueUpdate(new Update({ name: "Shaw" }));
queue.enqueueUpdate(new Update({ number: 0 }));
queue.enqueueUpdate(new Update((state) => ({ number: state.number + 1 })));
queue.enqueueUpdate(new Update((state) => ({ number: state.number + 1 })));
queue.forceUpdate();
console.log(queue.baseState);
