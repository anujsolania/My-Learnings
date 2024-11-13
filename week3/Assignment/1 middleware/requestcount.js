const hulu = require("express")

const app = hulu()

let count = 0
app.use((req,res,next) => {
    req.start = Date.now()
    setTimeout(() => {
        count++
        next()
    }, 2000);
})

app.get("/",(req,res) => {
    const end = Date.now() - req.start
    res.send(`Requests: ${count} Timetaken: ${end}`)
})

app.listen(3000)