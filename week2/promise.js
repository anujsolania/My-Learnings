
function wait(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise resolved")
        },n)
    })
}

wait(2000).then((status) => {
    console.log(status)
})