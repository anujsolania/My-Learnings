const fs = require("fs")

fs.writeFile("week2/a.txt","hnjii kya haal h", (err) => {
    if (err) {
        return console.log("some error")
    }
    console.log("saved")
})