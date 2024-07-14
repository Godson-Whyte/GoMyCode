// const http = require('http');

// http.createServer(function(req,res){
//     res.writeHead(200, {'content-Type': 'text/plain'})

//     res.end('Hello World\n\john')
// }).listen(8081)

// console.log('Server running at http://127.0.0.1:8081/');


const fs = require('fs')

// const data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("Program Ended");

// fs.readFile('input.txt', function (err, data){
//     //this is the callBack function
//     if (err) return console.error(err);
//     console.log(data.toString());
// });

// console.log("Program Ended");


//Import events module
let events = require('events');

// Create an eventEmitter object
let eventEmitter = new events.EventEmitter();

// Create an event handler as follows
let connectHandler = function connected() {
    console.log('connection succesful.');

    // Fire the data_received event
    eventEmitter.emit('data_received');
}

//Bind the connection event with the handler 
eventEmitter.on('connection', connectHandler);

//Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
    console.log('data_received succesfully.');
    
    eventEmitter.emit('connection');
});

//Fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended");