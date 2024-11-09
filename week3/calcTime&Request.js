const hulu = require("express")

const app = hulu()


function check(req,res,next) {
    const start = Date.now()
    const key = req.query.key
    if (key != 2) {
        res.status(403).json({
            mssg: "wrong key in query"
        })
    } else {
        count++
        req.start = start
        setTimeout(() => {
            next()
        },2000)
    }
}

let count = 0
app.get("/",check,function (req,res) {
    const end = Date.now()
    const t = end - req.start
    res.send(`Requests: ${count} TimeTAKEN: ${t}`)
    
})

//send and check in postman

app.use((err,req,res,next) => {
    //THIS IS GLOBAL CATCH
    res.status(500).send("internal server error")
})

app.listen(3000)
