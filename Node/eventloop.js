var event = require('events');

var eventEmitter = new event.EventEmitter();

eventEmitter.on('connection', () => {
  console.log('连接成功');
  eventEmitter.emit('data_received');
})

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', () => {
  console.log('数据接收成功。');
});

eventEmitter.emit('connection')

console.log('程序执行完毕');