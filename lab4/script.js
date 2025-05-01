'use strinct';

// 1. Global EC creation:
// Outer: null, LE: [{ ....}], TDZ{...}
// 2.Global EC execution:
// Outer: null, LE: [{ ....}], TDZ{...}
// 3.C FEC creation:
// Outer: ..., LE: [{ ....}], TDZ{...}
// 4.C FEC execution:
// Outer: ... , LE: [{ .... }], TDZ{...}
{
    let x; //undefined
    var a =  5;
    var b = 10;
    var c = function(a,b,c){
        document.write(x)//undefined
        document.write(a);//8
        var f = function(a,b,c){
            b = a;//8
            document.write(b);//8
            b = c;//10
            var x = 5;
        }

        f(a,b,c);
        document.write(b);//9
        var x = 10;
    }

    c(8,9,10);
    document.write(b);//10
    document.write(x);//undefined
}

{//Part 2
    var x = 9;
    function myFunction(){
        return x * x;
    }

    document.write(myFunction());//81
    var x = 5;
    document.write(myFunction());//25
}

{//PArt 3
    var foo = 1;

    function bar(){
        if(!foo){//undefined
            var foo = 10;
        }
        document.write(foo);//10
    }
    bar();
}