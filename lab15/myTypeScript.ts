const person : {
    name: string,
    age: number,
    isStudent: boolean
}  = {
    name: "John Smith",
    age: 30,
    isStudent: true,
}

function personDesription(person:  {
    name: string,
    age: number,
    isStudent: boolean
}): String{
    return `Person name is ${person.name} age: ${person.age} is student ${person.isStudent}.`;
}

console.log(personDesription(person));

function secondLargest(arr:number[]): number{
    let largest: number = 0;
    let secondLargest: number = 0;

    for(let n of arr){
        if(n > largest){
            secondLargest = largest;
            largest = n;
        }
    }
    return secondLargest;
}

// Your function code here
console.log(secondLargest([20 ,120 ,111 ,215 ,54 ,78])); // Output: 120

function sum (...arg): number{
    return arg.reduce((a,b) => a+b,0);
}

console.log(sum(2,4,6,3));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log([...arr1, ...arr2]);

class Student{
    studentId: number;
    answer: Question[];
    constructor(studentId){
        this.studentId = studentId;
        this.answer = [];
    }

    addAnswer(question: Question){
        this.answer.push(question);
    }
}

class Question{
    qid: number;
    answer: string;
    constructor(qid, answer){
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(answer: string){
        return this.answer === answer;
    }
}

class Quiz{
    students: Student[];
    questions: Map<number, Question>;
    constructor(questions,students){
        this.questions = new Map();
        this.students = students;

        for(let q of questions){
            this.questions.set(q.qid, q);
        }
    }

    scoreStudentBySid(sid: number){
        const student = this.students.find(s => s.studentId === sid);

        let score = 0;
        if(!student) return score;

        for(let std of student.answer){
            const question = this.questions.get(std.qid);
            
            if(!question) return score;
            
            if(question.checkAnswer(std.answer)){
                score++;
            }
        }

        return score;
    }

    getAverageScore(){
        if(this.students.length === 0) return 0;

        let totalScore = 0;

        for(let scr of this.students){
            totalScore += this.scoreStudentBySid(scr.studentId);
        }

        return totalScore/this.students.length;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5