// function Student(firstname, lastname, grades = []){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.grades = grades;
// }

// Student.prototype.inputGrade = function(newgrade){
//     this.grades.push(newgrade);
// }

// Student.prototype.computeAverageGrade = function(){
//     if(this.grades.length == 0) return 0;
//     const sum = this.grades.reduce((a,b) => a+b,0);
//     return sum/this.grades.length;
// }

// const std1 = new Student("Raldin", "Hidalgo");
// const std2 = new Student("Aida", "Garcia");
// const std3 = new Student("John", "Smith");
//  console.log(std1);

//  std1.inputGrade(100);
//  std1.inputGrade(90);
//  std1.inputGrade(100);

//  std2.inputGrade(90);
//  std2.inputGrade(95);
//  std2.inputGrade(100);

//  std3.inputGrade(90);
//  std3.inputGrade(82);
//  std3.inputGrade(80);

//  let students = [std1,std2,std3];

//  students.forEach(s =>  console.log(s.firstname+" "+s.lastname+" Average: "+s.computeAverageGrade()));


let student = {
    firstname: "",
    lastname : "",
    grades : [],
    inputNewGrade : function(newGrade){
        this.grades.push(newGrade);
    },
    computeAverageGrade: function(){
        if(this.grades.length == 0) return 0;
        const sum = this.grades.reduce((a,b) => a+b,0);
        return sum/this.grades.length;
    }
}

let stdObj = Object.create(student);
stdObj.firstname = "Aida";
stdObj.lastname = "Garcia";
stdObj.grades = [];

let stdObj2 = Object.create(student);
stdObj2.firstname = "Raldin";
stdObj2.lastname = "Hidalgo";
stdObj2.grades = [];

let stdObj3 = Object.create(student);
stdObj3.firstname = "john";
stdObj3.lastname = "Smith";
stdObj3.grades = [];

stdObj.inputNewGrade(100);
stdObj.inputNewGrade(100);
stdObj.inputNewGrade(100);

stdObj2.inputNewGrade(45);
stdObj2.inputNewGrade(50);
stdObj2.inputNewGrade(60);

stdObj3.inputNewGrade(90);
stdObj3.inputNewGrade(78);
stdObj3.inputNewGrade(70);


let students = [stdObj,stdObj2,stdObj3];
students.forEach(s => console.log(s.firstname+" "+s.lastname+" Avg. Grade: "+s.computeAverageGrade()));


// function Animal(name, speed = 0){
//     this.name = name;
//     this.speed = speed;
// }

// Animal.prototype.run = function(speed){
//     this.speed = speed;
// }

// Animal.compareBySpeed = function(a1,a2){
//     return a1.speed - a2.speed;
// }

// function Rabbit(name){
//     Animal.call(this,name);
// }

// Rabbit.prototype.hide = function(){
//     console.log(this.name + " hides");
// }

// Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);
// Object.setPrototypeOf(Rabbit, Animal);

// let rab1 = new Rabbit("White rabbit");
// let rab2 = new Rabbit("brown rabbit");
// let rab3 = new Rabbit("silver rabbit");

// let rabbits = [rab1,rab2,rab3];
// rab1.run(25);
// rab2.run(50);
// rab3.run(20);

// rab3.hide();
// console.log(rabbits.sort(Rabbit.compareBySpeed));