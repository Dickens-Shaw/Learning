/*
 * @Description: 
 * @Autor: Xdg
 * @Date: 2020-12-18 10:28:31
 * @LastEditors: Xdg
 * @LastEditTime: 2020-12-18 11:16:15
 * @FilePath: \Daily\NodeJs\event.js
 */

 var EventEmitter = require('events').EventEmitter;
 var event = new EventEmitter()
 event.on('some_event', function() {
   console.log('some_event事件触发');
 })
 event.on('some_event1', function(arg1,arg2) {
  console.log('some_event1事件1',arg1,arg2);
})
event.on('some_event1', function(arg1,arg2) {
  console.log('some_event1事件2',arg1,arg2);
})
event.emit('some_event1','参数1','参数2')
setTimeout(() => {
  event.emit('some_event')
},1000)
