const jwt = require("jsonwebtoken")
 

const value = {
    name: "Anuj Solania",
    number: "9988"
}

//generation
const token = jwt.sign(value, "secret")
console.log(token)

//you can visit the jwt.io - to decode the jwt

// verification
const verifiedvalue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW51aiBTb2xhbmlhIiwibnVtYmVyIjoiOTk4OCIsImlhdCI6MTcxNDIzMzIyMn0.geMRpWTp7dWyNjhJ8xzZ-8dN-EKn9pZ7YLQm3SthbHo", "secret")
console.log(verifiedvalue)