"use strict";
var role;
(function (role) {
    role[role["admin"] = 0] = "admin";
    role[role["user"] = 1] = "user";
    role[role["guest"] = 2] = "guest";
})(role || (role = {}));
console.log(role.admin);
function print(x) {
    return x[1];
}
const y = print(["anuj", 7]);
print(10);
