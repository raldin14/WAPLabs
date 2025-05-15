import http from 'http';
import fs from 'fs';

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/' || url === '/home' && method === 'GET'){
        res.setHeader('Content-Type', 'text/html');
        res.write('Welcome to my website');
        res.end();
    }else if(url === '/image' && method === 'GET'){
        const src = fs.createReadStream('./img/headeset.jpg');
        src.pipe(res);
    }else if(url === '/pdf' && method === 'GET'){
        res.setHeader('Content-Type', 'application/pdf');
        const src = fs.createReadStream('./files/lab13.pdf');
        src.pipe(res);
    }else if(url === '/about' && method === 'GET'){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello World!lab 13');
        res.end();
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 page not found');
    }

});

server.listen(3000, () => {
    console.log('Running on port 3000');
});