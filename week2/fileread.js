const fs = require("fs")

fs.readFile("week2/a.txt","utf-8",(err,data) => {
    if (err) {
        return console.log("some error")
    }
    console.log(data)
})





