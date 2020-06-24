// ES6 class syntax

// OOP generally not supported in JS, but the Class keyword makes JS makes more accessible with OOP


// a class is a blueprint for creating objects with pre defined properties and methods

// this takes advantage of prototype based inheritance - does not change how things work behind the scenes
// easier to work with class like structures

class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
}

// the method to create new objects must be called constructor

// the class keyword creates a constant, so you can NOT redfine it
// watch out for the syntax as well

// creating a new instance with these class constructors
// need to use new keyword with class

let firstStudent = new Student("Sean", "McQuaid", 20)

console.log(firstStudent)
console.log(firstStudent.grade)

