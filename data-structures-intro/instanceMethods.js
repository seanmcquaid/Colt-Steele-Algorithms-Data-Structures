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

}

let firstStudent = new Student("Sean", "McQuizzle")

// console.log(firstStudent.fullName())
// firstStudent.markLate()
// console.log(firstStudent.markLate())
console.log(firstStudent.addScore(99))
console.log(firstStudent.addScore(91))
console.log(firstStudent.calculateAverage())

// instance are methods that provide functionality to a single instance of a class