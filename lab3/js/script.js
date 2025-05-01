
"use strict";

let a = [1,2,3];
console.log("return sum of square")
function computeSumOfSquares(arr){
    return arr.reduce((total, item) => total + item * item, 0);
}
document.getElementById('asolution').innerHTML = computeSumOfSquares(a);
console.log(computeSumOfSquares(a));

console.log("Print add numbers")
let b = [1,2,3,4,5,6,7,8,9];
let viewPorpuse = "";
function printOddNumbersOnly(arr){
    
    arr.forEach( n => {
        if(n % 2 !== 0){
            console.log(n);
            viewPorpuse += " "+n;
        }
    })
}

console.log(printOddNumbersOnly(b));
document.getElementById('bsolution').innerHTML = viewPorpuse;

console.log("Print the fibo")
viewPorpuse ="";
function printFibo(n, a ,b){
    let f;
    while(n-- != 0){
        console.log(a);
        viewPorpuse += " "+a;
        f = b;
        b = a + b;
        a = f;
    }
}

console.log(printFibo(1,0,1));
document.getElementById('csolution1').innerHTML = viewPorpuse;
viewPorpuse ="";
console.log(printFibo(2,0,1));
document.getElementById('csolution2').innerHTML = viewPorpuse;
viewPorpuse ="";
console.log(printFibo(3,0,1));
document.getElementById('csolution3').innerHTML = viewPorpuse;
viewPorpuse ="";
console.log(printFibo(6,0,1));
document.getElementById('csolution6').innerHTML = viewPorpuse;
viewPorpuse ="";
console.log(printFibo(10,0,1));
document.getElementById('csolution10').innerHTML = viewPorpuse;
viewPorpuse ="";


let user = { name: "John", years: 30 };
// // your code to the left side:
let {name, years : age, isAdmin = false} = user
alert( name ); // John
console.log( name ); // John
alert( age ); // 30
console.log( age ); // 30
alert( isAdmin ); // false
console.log( isAdmin ); // false


let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 }
 ];
 //for viewing porpuse in html
 function presentInHTML (elementId,arr) {
    let ul = document.getElementById(elementId);
        arr.forEach(book => {
        let li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author} (ID: ${book.ID})`;
        ul.appendChild(li);
      });
 }
 presentInHTML ("library",libraryBooks);

function addBook(title, author, ID){
    let book = {title,author,ID};

    let exist = libraryBooks.find(item => {
        if(item.title === title && item.author === author && item.ID === ID){
            return true
        }else if(item.ID === ID){
            return true
        }else{
            return false;
        }
    });
    if(!exist){

        libraryBooks.push(book);
    }
}
addBook("The Yellow Road", "Brian Neil", 2245);
addBook("The Road Ahead", "Bill Gates", 4268);
addBook("The Road Ahead", "Bill Gates", 4267);
addBook("Walter Isaacson", "Steve Jobs", 4267);
presentInHTML ("bookAdded",libraryBooks);
console.log(libraryBooks);

let bookTitles =[]
 const getTitles = () => {
    libraryBooks.forEach(t => {bookTitles.push(t.title)});
    return bookTitles.sort((a,b) => a.localeCompare(b));
}

getTitles();
let ul = document.getElementById("booktitle");
        bookTitles.forEach(book => {
        let li = document.createElement("li");
        li.textContent = book;
        ul.appendChild(li);
      });
console.log(bookTitles);

const findBooks = (title) => {
    let result = libraryBooks.filter( item => item.title.includes(title));
    return result.sort((a,b) => a.ID - b.ID);
}

let books = findBooks("Road");
presentInHTML ("findByTitle",books);
console.log(books);

