/**
 * eventBus封装，用于微前端应用间通信
 * @author chenmb
 * @since 2020/11/12
 */

import { default as Mitt } from 'mitt';

let eventBus;

export const setEvtBus = (evtBus) => {
  eventBus = evtBus;
};

const initEventBus = () => {
  if (!eventBus) {
    eventBus = new Mitt();
  }
};

export const eventOn = (event, callBack) => {
  initEventBus();
  eventBus.on(event, callBack);
};

export const eventEmit = (event, data) => {
  initEventBus();
  eventBus.emit(event, data);
};
