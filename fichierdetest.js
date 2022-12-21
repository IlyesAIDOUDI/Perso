const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occurred!');
    console.log(myEmitter);
});
myEmitter.emit('event');