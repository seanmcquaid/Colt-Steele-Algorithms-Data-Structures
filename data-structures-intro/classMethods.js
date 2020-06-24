// class Student {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     fullName(){
//         return `Your full name is ${this.firstName} ${this.lastName}`
//     }

//     static enrollStudents(...students){
//         // maybe send an email here
//     }

// }

// the static keyword defines a static method for a class
// static methods are called without instantiating their class and cannot be called through a 
// class instance. Static methods are often used to create utility functions for an application


class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`
    }

    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3){
            return "You are expelled!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }

    addScore(score){
        this.scores.push(score);
        return this.scores
    }

    calculateAverage(){
        let sum = this.scores.reduce((a,b)=>{return a + b});
        return sum / this.scores.length
    }

    static enrollStudents(){
        return "Enrolling Students!";
    }

}

let firstStudent = new Student ("Sean", "McQuaid");
let secondStudent = new Student ("Dr.", "Doone")
// firstStudent.enrollStudents() - does not work

// console.log(Student.enrollStudents([firstStudent, secondStudent]))

// mdn docs example

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){
        const distX = a.x - b.x;
        const distY = a.y - b.y;
        return Math.hypot(distX, distY)
    }
}

const p1 = new Point(5,5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1,p2))

// how we will be using classes to create data structures

class DataStructure{
    constructor(){
        // what default properties should it have?
    }
    someInstanceMethod(){
        // what should each object created from this class be able to do?
    }
}

// we will almost never be using static methods

// inside all of our instance methods and constructor, this refers to the object created from that instance