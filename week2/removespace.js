const fs = require("fs")

let str
fs.readFile("week2/a.txt","utf-8",(err,data) => {
    if (err) {
        return console.log("some error")
    }
    str = data.replace(/\s+/g, ' ')
    console.log(str)

    fs.writeFile("week2/a.txt",str,(err) => {
        console.log("saved")
    })
})

