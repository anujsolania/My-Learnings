let x : number = 1
// x = "hello"
console.log(x)

function greet(firstName: string) {
    console.log("Hello " + firstName);
}

function sum(a: number,b: number): number {
    return a + b;
}

function teenager(age: number): boolean {
    if (age > 18) { return true }
    return false
}

function fn(fn1: (x: string)=>void) {
    setTimeout(fn1,1000);
}
function fn1(x: string) {
    console.log("i am "+ x)
}

fn(() => fn1("funtion 1") )
greet("Anuj Solania");
console.log(sum(2,3))
console.log(teenager(18))


const user = {
    firstname: "Anuj",
    lastname: "Solania",
    age: 20
}

interface User {
    firstname: string
    lastname: string
    age: number
} 

function isLegal(user: User) {
    if (user.age>18) {
        return true + " i.e LEGAL"
    } return false
}
console.log(isLegal(user))
