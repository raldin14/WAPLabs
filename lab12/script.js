// 1. Pls answer the following: 

// What is LibUV?
// Explain the difference between setImmediate(f) and setTimeout(f, Time)?
// Explain the difference between process.nextTick(f) and setImmediate(f)?
// 2. Pls write down the output without executing the following code snippets and check it with result. 

const fs = require('fs');

//you may assume input.txt is in the same folder

const rd = fs.createReadStream("input.txt");

rd.close();

rd.on("close", () => console.log('readablStream close event'))

fs.readFile('input.txt', "utf-8", (error, data) => {

    if (error) console.log(error);

    else console.log(data)

});

setTimeout(() => console.log("this is setTimeout"), 5000);

setTimeout(() => console.log("this is setTimeout"), 0);

 

setImmediate(() => console.log("this is setImmediate 1"));

setImmediate(() => {

    console.log("this is setImmediate 2")

    Promise.resolve().then(() => console.log('Promise.resolve inside setImmediate'));

});

Promise.resolve().then(() => console.log('Promise.resolve 1'));

Promise.resolve().then(() => {

    console.log('Promise.resolve 2')

    process.nextTick(() => console.log('nextTick inside Promise'));

});

process.nextTick(() => console.log('nextTick 1'));

