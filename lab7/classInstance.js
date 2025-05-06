class Student{
    constructor(studentId){
        this.studentId = studentId;
        this.answer = [];
    }

    addAnswer(question){
        this.answer.push(question);
    }
}

class Question{
    constructor(qid, answer){
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(answer){
        return this.answer === answer;
    }
}

class Quiz{
    constructor(questions,students){
        this.questions = new Map();
        this.students = students;

        for(let q of questions){
            this.questions.set(q.qid, q);
        }
    }

    scoreStudentBySid(sid){
        const student = this.students.find(s => s.studentId === sid);

        let score = 0;

        for(let std of student.answer){
            const question = this.questions.get(std.qid);

            if(question.checkAnswer(std.answer)){
                score++;
            }
        }

        return score;
    }

    getAverageScore(){
        if(this.students.lenght === 0) return 0;

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