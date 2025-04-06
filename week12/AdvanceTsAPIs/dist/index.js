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
