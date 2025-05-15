import fs from 'fs';
import fspromises from 'fs/promises';
import url from 'url';
import path from 'path';
//fs.readFileSync()
let __filename = url.fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);
let filepath = path.join(__dirname,'/files/input.txt');

let fsAsycn = fs.readFileSync(filepath,'utf-8');
console.log('readFileSync: ',fsAsycn);

//fs.readFile()
fs.readFile(filepath,{encoding: 'utf-8'}, (err, data) =>{
    if(err) throw err;

    console.log('readFile: ',data);
});

//fspromises.readFile()
try {
    let content = await fspromises.readFile(filepath,'utf-8');
    console.log('fsPromise: ',content);
} catch (error) {
    console.error('Faile to read data');
}
//fs.createReadStream()
const readable = fs.createReadStream(filepath,{highWaterMark: 5, encoding: 'utf-8'});

readable.on('data',function(chunk){
    console.log('createReadStream: ',chunk);
})