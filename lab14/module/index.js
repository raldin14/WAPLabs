import express from 'express';
import path from 'path';
import url from 'url';

const app = express();
app.set('port', process.env.PORT || 3001);
const port = app.get('port');
app.use(express.static('./public'))

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get(['/','/home'],(req, res, next) =>{
    res.send('Welcome to my website');
});

app.get('/about',(req,res,next)=>{
    res.send('Hello World! about lab 13');
});

app.get('/image',(req, res, next) =>{
    res.sendFile(path.join(__dirname, 'public/img', 'headeset.jpg'));
});

app.get('/pdf',(req, res, next) =>{
    res.sendFile(path.join(__dirname, 'public/files', 'lab13.pdf'));

});

app.use((req,res,next) =>{
    next("handling error");
})

app.use((err,req,res,next)=>{
    res.status(500).json({ message: "Server Internal error" });
});

app.listen(port, () => {
    console.log('Your Server is running on ',port);
});