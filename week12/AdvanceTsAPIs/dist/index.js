"use strict";
function userprofile(user1) {
    console.log(`name: ${user1.name} email: ${user1.email}`);
}
const user1 = {
    name: "anuj",
    age: 59,
    email: "anuj@gmail.com"
};
const user2 = {
    name: "bablu",
    age: 56,
    email: "bablu@gmail.com"
};
userprofile(user1);
const user3 = {
    name: "dabluuuu"
};
function printname(user) {
    console.log(user.name);
}
printname(user3);
const config = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};
const user = {
    "a": { id: "vhsv", name: "anuj" },
    "b": { id: "vhfev", name: "anujuwebf" }
};
//MAPS 
const userMap = new Map();
userMap.set("c", { id: "hello", name: "bjdhvbsdjs" });
userMap.set("d", { id: "heldwvdlo", name: "bjdhvbdsvdsvssdjs" });
console.log(userMap.get("c"));
function eventfn(event) {
    console.log(event);
}
// eventfn("mousemove")  //Not possible
eventfn("click");
