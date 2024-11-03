const fs = require("fs")

function myfn() {
    return new Promise((resolve, reject) => {
        fs.readFile("a.txt","utf-8",(err,data) => {
            resolve(data)
        })
    })
}

// setTimeout(() => {
//     main()
// }, 2000);

async function main() {
    const value = await myfn()
    console.log(value)
}

main()

