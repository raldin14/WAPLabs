import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3001);
const port = app.get('port');
app.use(express.json());

const convertToNumber = (req) => {
    let a = req.params.a || req.query.a || req.body.a;
    let b = req.params.b || req.query.b || req.body.b;

    return { a: parseFloat(a), b : parseFloat(b)}
}

app.get(['/addition/:a/:b/','/addition'],(req,res,next) => {
    const {a,b} = convertToNumber(req);
    res.json({result: parseFloat(a) + parseFloat(b)})
});

app.post('/addition',(req,res,next) =>{
    
    const {a,b} = convertToNumber(req);
    res.json({result: parseFloat(a) + parseFloat(b)});
})

app.get(['/subtraction/:a/:b/','/subtraction'],(req,res,next) => {
    const {a,b} = convertToNumber(req);
    res.json({result: parseFloat(a) - parseFloat(b)})
});

app.post('/subtraction',(req,res,next) =>{
    
    const {a,b} = convertToNumber(req);
    res.json({result: parseFloat(a) - parseFloat(b)});
})

app.get(['/multiplication/:a/:b/','/multiplication'],(req,res,next) => {
    const {a,b} = convertToNumber(req);
    res.json({result: parseFloat(a) * parseFloat(b)})
});

app.post('/multiplication',(req,res,next) =>{
    
    const {a,b} = convertToNumber(req);
    res.json({result: parseFloat(a) * parseFloat(b)});
})

app.get(['/division/:a/:b/','/division'],(req,res,next) => {
    const {a,b} = convertToNumber(req);
    res.json({result: parseFloat(a) / parseFloat(b)})
});

app.post('/division',(req,res,next) =>{
    
    const {a,b} = convertToNumber(req);
    res.json({result: parseFloat(a) / parseFloat(b)});
})

app.get(['/modulus/:a/:b/','/modulus'],(req,res,next) => {
    const {a,b} = convertToNumber(req);
    res.json({result: parseFloat(a) % parseFloat(b)})
});

app.post('/modulus',(req,res,next) =>{
    
    const {a,b} = convertToNumber(req);
    res.json({result: parseFloat(a) % parseFloat(b)});
})

app.listen(port,() =>{
    console.log(`Express running on port ${port}`)
})