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
    Promise.all([wait1(t1),wait2(t2),wait3(t3)]).then((value) => {
    const end = Date.now()
    const ans = end - start
    console.log(value+"Time taken: "+ans)
})
}

calculateTime(1000,2000,3000)

// wait1(1000)
// .then((value) => {
//     console.log(value)
//     wait2(2000).then(
//         (value) => {
//             console.log(value)
//             wait3(3000).then((value) => {
//                 console.log(value)
//             })
//         }
//     )
// })

