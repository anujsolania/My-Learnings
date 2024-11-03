const fs = require("fs")

function FileRead() {
    return new Promise(function(resolve,reject) {
        fs.readFile("a.txt","utf-8",function(err,data) {
            resolve(data)
        })
    })
}

function ondone(dablu) {
    console.log(dablu)
}


FileRead().then(ondone)