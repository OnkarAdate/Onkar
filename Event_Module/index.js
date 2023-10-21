const  EventEmitter = require('events');

const event = new EventEmitter(); //class

event.on("myname", ()=>      // Defination
{
    console.log("MY name is Onkar")
});

event.emit('myname'); // call