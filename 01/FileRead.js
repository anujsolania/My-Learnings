const fs = require('fs');

function FileRead() {
    fs.readFile("a.txt","utf-8", (err,data) => {
        console.log(data)
    })
}

FileRead()


