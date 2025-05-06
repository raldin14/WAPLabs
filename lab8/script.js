// class Meditation{
//     constructor(val){
//         this.val = val;
//         this.timeout = (val + 1) * 1000;
//     }

//     start(){
//         let intervalId = setInterval(() => {
//             console.log(this.val--);
//         },1000);

//         setTimeout(() => {
//             clearInterval(intervalId);
//             console.log("Jay Guru Dev");
//         }, this.timeout);
//     }
// }

// const morning_meditation = new Meditation(5);
// morning_meditation.start();
// console.log(`Start meditation`);
// Start meditation
// 5
// 4
// 3
// 2
// 1
// Jay Guru Dev

// const isPrime = (n) => {
//     for (let i = 2, s = Math.sqrt(n); i <= s; i++)
//     if (n % i === 0) return Promise.reject(false);
//     return Promise.resolve(n > 1);
//    };

// console.log('start');
// isPrime(7)
//  .then(console.log)
//  .catch(console.error);
// console.log('end');
 const isPrime = async (n) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
        if (n % i === 0) Promise.reject(false);
    return Promise.resolve(n > 1);
   };

   console.log('start');

(async ()=>{ 
    let promise = await isPrime(7);
    console.log(promise);//async
    
})()

console.log('end');//sync


(async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    if (response.ok) {
        let json = await response.json();
        // console.log(json);
        let recipes = json.recipes;
        for(let rec of recipes){
            console.log(rec.name);
        }
    } else {
        console. log(" HTTP-Error : " + response.status);
    }
})();


//    console.log("start");
//    let x = 10;
//    function foo(){
//     console.log(1)
//     return Promise.resolve("hello");
//    }

//    function bar(){
//     console.log("Starte")
//     foo().then(result => {
//         console.log(result);
//         console.log("x",x);
//     })

//     return Promise.resolve(undefined)
//    }

//    bar();
//    x = 40;
//    console.log("end")