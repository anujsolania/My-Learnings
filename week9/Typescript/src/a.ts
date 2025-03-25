// let x : number = 1
// // x = "hello"
// console.log(x)

// function greet(firstName: string) {
//     console.log("Hello " + firstName);
// }

// function sum(a: number,b: number): number {
//     return a + b;
// }

// function teenager(age: number): boolean {
//     if (age > 18) { return true }
//     return false
// }

// function fn(fn1: (x: string)=>void) {
//     setTimeout(fn1,1000);
// }
// function fn1(x: string) {
//     console.log("i am "+ x)
// }

// fn(() => fn1("funtion 1") )
// greet("Anuj Solania");
// console.log(sum(2,3))
// console.log(teenager(18))


// const user = {
//     firstname: "Anuj",
//     lastname: "Solania",
//     age: 20
// }

// interface User {
//     firstname: string
//     lastname: string
//     age: number
// } 

// function isLegal(user: User) {
//     if (user.age>18) {
//         return true + " i.e LEGAL"
//     } return false
// }
// console.log(isLegal(user))

// type value = number | string

// function print(value: value ) {
//     console.log(value)
// }
// print(23)
// print("anuj")

// type student = {
//     name: string,
//     age: number
// }
// type teacher = {
//     salary: number
// }
// type both = student | teacher

// let user: both = {
//     salary:6346834
// }

// type arr = number[]
// let numbers: arr = [2,5,56,43]

//ENUMS

enum role  {
    admin,
    user,
    guest
}
console.log(role.admin)

//GENRICS 
function print<T>(x: T): T {
    return x
}

const y  = print<string>("anuj")
const w = print<number>(10)








