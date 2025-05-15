/**
 * Question1: What will be outputs in ES module and CommonJS module? 



Question2: Create a web server using http module:

If the path is ‘/image’ and method is GET, send a response of an image to any client. Set an appropriate content-type for your image.
If the path is ‘/pdf’ and method is GET, send a response of a pdf file to any client. Set a Content-type as "application/pdf".
If the path is ‘/about’ and method is GET, send a response of a txt file to any client. Set a Content-type as "text/plain".
If the path is ‘/home’ or ‘/’ and method is GET, send “Welcome to my website” text.
Otherwise return not found with status code 404.
Question3: practice the fs.readFileSync(), fs.readFile(), fspromises.readFile(), and fs.createReadStream() methods. What are the differences? 
 */
import fs from "fs"; // or const fs = require('fs');

process.nextTick(() => console.log('nextTick 1'));

Promise.resolve().then(() => console.log('promise 1'));

setImmediate(() => { console.log('setImmediate 1') });

setTimeout(() => console.log('setTimeout 1'), 0);

fs.readFile('./files/input.txt', "utf-8", (err, data) => {

    if (err)

        console.log('there is an error. can not read from file');

    else {

        console.log(data);

    }

});