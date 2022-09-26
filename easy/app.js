/*let fName = ["Evan"]
let lName = ["DeGraffenriedt"]
let age = ["25"]

let greeting = "Hello, my name is " + fName + " " +lName +" and i am " + age + " years old "
console.log(greeting) */

let students = [{fName:"john", lName:"doe", age:12},{fName:"josh", lName:"dash", age:16},{fName:"jobs", lName:"steve", age:20}]

let greeting = `hello, my name is ${students[1].fName} ${students[1].lName} and im ${students[1].age} years old`
console.log(greeting)