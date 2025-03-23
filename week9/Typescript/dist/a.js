"use strict";
let x = 1;
console.log(x);
function greet(firstName) {
    console.log("Hello " + firstName);
}
function sum(a, b) {
    return a + b;
}
function teenager(age) {
    if (age > 18) {
        return true;
    }
    return false;
}
function fn(fn1) {
    setTimeout(fn1, 1000);
}
function fn1(x) {
    console.log("i am " + x);
}
fn(() => fn1("funtion 1"));
greet("Anuj Solania");
console.log(sum(2, 3));
console.log(teenager(18));
const user = {
    firstname: "Anuj",
    lastname: "Solania",
    age: 20
};
function isLegal(user) {
    if (user.age > 18) {
        return true + "i.e LEGAL";
    }
    return false;
}
console.log(isLegal(user));
