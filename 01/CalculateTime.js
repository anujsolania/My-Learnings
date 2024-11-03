function sum(n) {
    let sum = 0
    const t1 = Date.now()
    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }
    const t2 = Date.now()
    const t3 = t2 - t1
    console.log(sum + " Time taken: "+ t3 +" Milliseconds")
}

sum(200000)
// const t4 = new Date()
// console.log(t4.getMilliseconds())