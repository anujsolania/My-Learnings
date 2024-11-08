function sleep(milliseconds) {
    return new Promise((resolve, reject) => {
    let enddate = Date.now() + milliseconds
    while (Date.now() < enddate) { }
    resolve()
    })
}

sleep(3000)
console.log("hello")

