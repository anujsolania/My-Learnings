function wait1(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1 executed")
        },t)
    })
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2 executed")
        },t)
    })
}

function wait3(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("3 executed")
        },t)
    })
}

function calculateTime(t1, t2, t3) {
    const start = Date.now()
    wait1(t1)
.then((value) => {
    console.log(value)
    wait2(t2).then(
        (value) => {
            console.log(value)
            wait3(t3).then((value) => {
                const end = Date.now()
                const ans = end - start
                console.log(value)
                console.log("Time taken: "+ans)
            })
        }
    )
})
}

calculateTime(1000,2000,3000)



